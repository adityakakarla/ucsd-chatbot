## Note: I shut down this project because I ran out of projects on Supabase's free tier
# ucsdGPT

**ucsdGPT** is a chatbot designed to assist with course information and general education requirements at the University of California, San Diego (UCSD). This project leverages **LangChain**, **Supabase**, and **Next.js** to provide tailored responses based on UCSD's extensive course catalog and academic requirements.

## Technologies Used
- **LangChain**: For context-aware chatbot interactions.
- **Supabase**: For managing vector embeddings and user data.
- **Next.js**: For building the frontend and server-side functionality.

## Project Overview

### V1: Proof of Concept

The initial version of ucsdGPT was built as a basic chatbot for UCSD course information.

- **Data Setup**: I compiled all 3,898 undergraduate courses into a text file and created vector embeddings to represent the semantic meaning of each course description.
- **Chatbot Creation**: Using LangChain, I developed a chatbot capable of answering course-related queries by pulling context from course descriptions.
- **Server Actions**: I implemented the chatbot functionality as a server action in a Next.js app, which executes whenever a user submits a question through the chatbot form.

Despite being a fun and rewarding project, **V1** had limitations, particularly in its utility beyond course information.

### V2: Usability Enhancements

After **V1** was used over 2,100 times, I received valuable feedback—mainly from the UCSD Discord server—that helped shape **V2**.

- **Expanded Dataset**: I added more data, including general education requirements for UCSD's eight colleges and schedule information to improve the chatbot's usefulness.
- **Upgraded Models**: V2 now uses **GPT-4o mini** (upgrading from GPT-3.5) and a newer embeddings model from OpenAI to enhance response accuracy and depth.
- **Mobile Optimization**: Recognizing that many users access the chatbot on their phones, I focused on improving the mobile user experience.
- **User Authentication**: While not a noted pain point, I've now added authentication and content moderation

V2 represents a significant improvement in both functionality and user experience, and I'm excited to continue iterating on this project.
