"use server";

import "dotenv/config.js";
import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { retriever } from "../supabase/retriever.js";
import { combineDocuments } from "../supabase/combine_documents.js";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";

export async function getResponse(prompt: string) {
  try {
    const openAIApiKey = process.env.OPENAI_API_KEY;

    const llm = new ChatOpenAI({ openAIApiKey });

    const standaloneQuestionTemplate = `given a question, convert it into a standalone question.
question: {question}
standalone question:`;

    const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
      standaloneQuestionTemplate
    );

    const standaloneQuestionChain = RunnableSequence.from([
      standaloneQuestionPrompt,
      llm,
      new StringOutputParser(),
    ]);

    const retrieverChain = RunnableSequence.from([
      (prevResult) => prevResult.standalone_question,
      retriever,
      combineDocuments,
      new StringOutputParser(),
    ]);

    const answerTemplate = `Answer question based on the provided context. If you
cannot find the answer in the context, make an educated guess. If this is not
possible, state that you do not know.

If the question is irrelevant to courses at UCSD, state "This is irrelevant".

Speak in a friendly tone. Answer in two sentences.

context: {context}
question: {question}
answer: `;

    const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

    const answerChain = RunnableSequence.from([
      answerPrompt,
      llm,
      new StringOutputParser(),
    ]);

    const chain = RunnableSequence.from([
      {
        standalone_question: standaloneQuestionChain,
        original_input: new RunnablePassthrough(),
      },
      {
        context: retrieverChain,
        question: ({ original_input }) => original_input.question,
      },
      answerChain,
    ]);
    const response = await chain.invoke({
      question: prompt,
    });

    return response;
  } catch (error){
    return 'Oops. Something bad happened.'
  }
}
