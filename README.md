# ucsdGPT

This is a chatbot based on courses at the University of California, San Diego.

I built this project with LangChain, Supabase, and Next.js.

## V1

Initially, I copy-and-pasted all UCSD undergraduate courses into a text file. Then, using LangChain and Supabase, I created vector embeddings (arrays that capture the semantic meaning of text) for all 3,898 courses.

Once the data was in place, I created a basic chatbot script using Langchain. This script considered context from relevant course descriptions and the original question from the user.

Using Next.js, I turned this script into a server action. This action runs whenever a user submits the chatbot form.

This was a fun project, and I'm excited to see what else I can build with these tools.

## V2

The initial version was used 2100+ times. Mostly well received, but I did get criticism in a UCSD discord server.

Most feedback was related to usability—outside of course info, V1 wasn't that useful.

This time around, I've added more embeddings data (primarily focused on gen ed requirements for UCSD's 8 colleges). I also added relevant schedule information.

V2 also uses GPT-4o mini (as opposed to 3.5) and a newer embeddings model from OpenAI.

V2 is designed to be more user-friendly, especially on phones (V1 admittedly wasn't great in this regard).

I've also added authentication. Not a pain point for users, but I don't want people to burn through my OpenAI credits.