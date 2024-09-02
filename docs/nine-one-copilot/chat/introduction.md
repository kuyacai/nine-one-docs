---
id: chat-introduction
title: How to chat with AI in Nine One Copilot
sidebar_label: Chat with AI
slug: /chat-introduction
hide_table_of_contents: false
---
import IdealImage from '@theme/IdealImage';
import CheckmarkList from '@site/src/components/style/CheckmarkList';

## **Main Interface**

When you start Nine One Copilot, you'll see the following interface:

<div style={{ textAlign: 'center' }}>
  <IdealImage img={require('@site/static/images/NineOneCopilot/main_ui.png')} alt="Nine One Copilot Main Interface" />
</div>

There are two ways to start a new conversation:

<CheckmarkList>
- Click on a large language model provider in the image above.
- Click on the "Chats" button in the left navigation bar.
</CheckmarkList>

Let's explore these methods in detail:

## **Starting a Conversation by Clicking on a Language Model Provider**

On the `Home` screen, you'll find several large language model providers. Let's use `OpenAI` as an example. Click the "Try it" button on the `OpenAI` card to go to the following screen:

<div style={{ textAlign: 'center' }}>
  <IdealImage img={require('@site/static/images/NineOneCopilot/openai_chat_interface.png')} alt="Nine One Copilot Open AI Interface" />
</div>

If you haven't set your OpenAI API key, click "Settings" (indicated by arrow 1) to do so. For instructions on how to get an OpenAI API key, please refer to...

Once you've set your API key, click "New Conversation" to start a new chat. This will look like:

<div style={{ textAlign: 'center' }}>
  <IdealImage img={require('@site/static/images/NineOneCopilot/moonshot_new_convseration.png')} alt="Nine One Copilot Open AI Chat Interface" />
</div>

Here's what each button does:

<CheckmarkList>
- **Modify button** (arrow 1): Change the name of the conversation.
- **Delete button** (arrow 2): Delete the conversation. Be careful, as this will erase all its content.
- **Model selection button** (arrow 3): Most providers offer multiple models. Choose the one that best suits your needs. Note that different models have varying context window sizes and costs.
- **Clear context button** (arrow 4): Clear the conversation context without deleting the chat history. This is useful when starting a new topic.
- **Max turns** (arrow 5): The maximum number of turns in a conversation. Higher values increase token usage.
- **Continuous conversation** (arrow 6): Enable or disable continuous conversations.
- **Stream output** (arrow 7): Enable or disable streaming output.
- **Like/Unlike** (arrow 8): Currently, only "unlike" works. Use it to ignore unsatisfactory responses, improving future results.
- **Conversation history** (arrow 9): View the complete history of the conversation.
</CheckmarkList>

## **Starting a Conversation from the "Chats" Tab**

Clicking the "Chats" button in the left navigation bar will take you to:

<div style={{ textAlign: 'center' }}>
  <IdealImage img={require('@site/static/images/NineOneCopilot/chat_main_interface.png')} alt="Nine One Copilot Chat Main Interface" />
</div>

<CheckmarkList>
- The left panel shows the conversation list, and the right panel is for the active conversation.
- Click the "+" button (arrow 1) to start a new chat.
- Click the refresh button (arrow 2) to update the conversation list.
- The features in the conversation area have been explained above.
</CheckmarkList>
