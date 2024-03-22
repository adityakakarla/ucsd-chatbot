This is a chatbot based on courses at the University of California, San Diego.

I developed this project using Langchain, Supabase, and Next.js.

Initially, I copy-and-pasted all UCSD undergraduate courses into a text file. Then, using Langchain and Supabase, I created embeddings for all 3,898 courses.

Once the data was in place, I created a basic chatbot script using Langchain. This script considered context from relevant course descriptions and the original question from the user.

Using Next.js, I turned this script into a server action. This action runs whenever a user submits the chatbot form.

This was a fun project, and I'm excited to see what else I can build with these tools.