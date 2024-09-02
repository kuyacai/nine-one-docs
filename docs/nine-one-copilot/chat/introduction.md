---
id: chat-introduction
title: How to chat with AI in Nine One Copilot
sidebar_label: Chat with AI
slug: /chat-introduction
hide_table_of_contents: false
---
import IdealImage from '@theme/IdealImage';
import CheckmarkList from '@site/src/components/style/CheckmarkList';

## 主界面说明

当你启动 Nine One Copilot 软件后，你将看到如下界面：

<div style={{ textAlign: 'center' }}>
  <IdealImage img={require('@site/static/images/NineOneCopilot/main_ui.png')} alt="Nine One Copilot Main Interface" />
</div>

有两种方法进入对话界面：

<CheckmarkList>
- 点击上图中各大语言模型提供商;
- 点击左侧导航栏中“Chats”按钮;
</CheckmarkList>

下面将分别介绍这两种方法：

## 点击大语言模型提供商直接进入对话界面

在`Home`界面中，有多个大语言模型提供商可以选择，这里我们以`OpenAI`为例，点击`OpenAI` 卡片上的`Try it`按钮，进入如下界面：
<div style={{ textAlign: 'center' }}>
  <IdealImage img={require('@site/static/images/NineOneCopilot/openai_chat_interface.png')} alt="Nine One Copilot Open AI Interface" />
</div>

如果你未设置 OpenAI API key，那么需要点击`设置`(箭头1指向处) 设置，获取Open AI API Key 和 设置方法请参见

设置 API Key 后，点击` New Conversation ` 按钮，新建一个会话。如下图所示：
<div style={{ textAlign: 'center' }}>
  <IdealImage img={require('@site/static/images/NineOneCopilot/moonshot_new_convseration.png')} alt="Nine One Copilot Open AI Chat Interface" />
</div>

各功能按钮解释如下：

<CheckmarkList>
- 修改按钮（箭头1指向处），可以修改会话的名称；
- 删除按钮（箭头2指向处），可以删除该会话，注意，删除后将清空该会话的所有内容；
- 模型选择按钮（箭头3指向处），大多数模型提供商都提供了多个模型可以选择，你可以根据自己的实际需要选择会话的模型，注意，不同的模型支持的上下文token数不一致，价格也不一致。
- 清除上下文会话按钮（箭头4指向处），当你清除上下文会话内容时，可点击该按钮，注意，该按钮并不是要删除该会话记录。该按钮只是在你期望与大模型进行连续会话时有用。更多的关于连续会话的知识，请参考我们的博客。
- 连续会话轮数按钮（箭头5指向处），在连续会话时，最大支持的轮数，该值越大意味着每次会话，耗费的token数越多，如何更有效的利用该功能，请参阅我们关于`连续会话`的博客文章。
- 连续会话选项按钮（箭头6指向处），是否使用连续会话功能；
- 流式输出按钮（箭头7指向处），是否使用流式输出；
- Like 和 Unlike 按钮（箭头8指向处），目前仅unlike按钮生效，在连续会话过程中，如果你对某条回答不满意，选中"unlike"，那么这条记录将被忽略，这有助于你更高效的与模型会话，获得更好的结果。
- 会话历史按钮（箭头9指向处），点击该按钮，可以查看该会话的所有历史记录。
</CheckmarkList>

## 点击左侧导航栏中“Chats”按钮进入会话界面

当我们点击左侧导航栏中的`Chats`按钮后，将进入下面界面：

<div style={{ textAlign: 'center' }}>
  <IdealImage img={require('@site/static/images/NineOneCopilot/chat_main_interface.png')} alt="Nine One Copilot Chat Main Interface" />
</div>

<CheckmarkList>
- 左侧是会话列表，右侧是会话区域。
- 点击箭头1指向处的"+"按钮，可以新建会话。
- 点击箭头2指向处的按钮，可以刷新会话列表。
- 会话区域的相关功能已经在前文中讲述，这里不再重复。
</CheckmarkList>