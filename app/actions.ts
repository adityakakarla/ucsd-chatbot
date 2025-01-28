'use server';

import { createStreamableValue } from 'ai/rsc'
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase"
import { OpenAIEmbeddings, ChatOpenAI } from '@langchain/openai'
import { createClient } from '@supabase/supabase-js'
import {
    RunnableSequence,
    RunnablePassthrough,
} from "@langchain/core/runnables";
import { PromptTemplate } from '@langchain/core/prompts'
import { StringOutputParser } from "@langchain/core/output_parsers";
import OpenAI from 'openai';

export async function generateResponse(prompt: string, temperature: number) {
    try {
    //     const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});

    //     const flagged = await openai.moderations.create({
    //         input: prompt
    //     })

    //     if(flagged.results[0]?.flagged) {
    //         throw new Error(`Your prompt has been flagged. Please try again.`)
    //     }


    //     const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    //     if (!supabaseKey) throw new Error(`Expected SUPABASE_SERVICE_ROLE_KEY`)

    //     const url = process.env.SUPABASE_URL
    //     if (!url) throw new Error(`Expected env var SUPABASE_URL`)

    //     const supabase = createClient(url as string, supabaseKey as string)

    //     const retriever = new SupabaseVectorStore(
    //         new OpenAIEmbeddings({ model: 'text-embedding-3-small' }),
    //         {
    //             client: supabase,
    //             tableName: 'documents',
    //             queryName: 'match_documents',
    //         }
    //     ).asRetriever(5)

    //     const openAIApiKey = process.env.OPENAI_API_KEY;

    //     const llm = new ChatOpenAI({ openAIApiKey, temperature, model: 'gpt-4o-mini' });

    //     const standaloneQuestionTemplate = `Given a question, convert it into a standalone question.

    // question: {question}
    // standalone question:`;

    //     const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
    //         standaloneQuestionTemplate
    //     );

    //     const standaloneQuestionChain = RunnableSequence.from([
    //         standaloneQuestionPrompt,
    //         llm,
    //         new StringOutputParser(),
    //     ]);

    //     const retrieverChain = RunnableSequence.from([
    //         (prevResult) => prevResult.standalone_question,
    //         retriever,
    //         combineDocuments,
    //         new StringOutputParser(),
    //     ]);

    //     const answerTemplate = `
    // Answer the potentially UCSD-related question. Use context if needed.
    
    // Speak in a friendly tone. Answer in 1-2 sentences. Be concise and succinct.

    // If you are not sure of the answer, say so.
    
    // context: {context}
    // question: {question}
    // answer: `;

    //     const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

    //     const answerChain = RunnableSequence.from([
    //         answerPrompt,
    //         llm,
    //         new StringOutputParser(),
    //     ]);

    //     const chain = RunnableSequence.from([
    //         {
    //             standalone_question: standaloneQuestionChain,
    //             original_input: new RunnablePassthrough(),
    //         },
    //         {
    //             context: retrieverChain,
    //             question: ({ original_input }) => original_input.question,
    //         },
    //         answerChain,
    //     ]);

    //     const response = await chain.stream({
    //         question: prompt,
    //     });

        const stream = createStreamableValue('Shut this down because Supabase has a low free tier :(');
        return stream.value;
    } catch (error) {
        const stream = createStreamableValue(`${error}`)
        return stream.value
    }
}

function combineDocuments(docs: any[]) {
    return docs.map((doc) => doc.pageContent).join('\n\n')
}
