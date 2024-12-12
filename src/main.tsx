import "./ui/style.css";
import "@logseq/libs";
import { openAIWithStream } from "./lib/openai";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Command, LogseqAI } from "./ui/LogseqAI";
import { loadUserCommands, loadBuiltInCommands } from "./lib/prompts";
import { getOpenaiSettings, settingsSchema } from "./lib/settings";
import { runDalleBlock, runGptBlock,runGptBlockH,runGptBlockG, runGptBlockT ,runGptBlockY ,runGptBlockU ,runGptBlockI ,runGptBlockO ,runGptPage, runWhisper } from "./lib/rawCommands";
import { BlockEntity } from "@logseq/libs/dist/LSPlugin.user";
import { useImmer } from 'use-immer';

logseq.useSettingsSchema(settingsSchema);

async function main() {
  const root = ReactDOM.createRoot(document.getElementById("app")!);
  root.render(
    <React.StrictMode>
      <LogseqApp />
    </React.StrictMode>
  );

  function createModel() {
    return {
      show() {
        logseq.showMainUI({ autoFocus: true });
      },
    };
  }

  logseq.provideModel(createModel());
  logseq.setMainUIInlineStyle({
    zIndex: 11,
  });
}

logseq.ready(main).catch(console.error);

type singleBlockSelected = {
  type: "singleBlockSelected";
  block: BlockEntity;
};

type multipleBlocksSelected = {
  type: "multipleBlocksSelected";
  blocks: BlockEntity[];
};

type noBlockSelected = {
  type: "noBlockSelected";
};

type AppState = {
  selection: (singleBlockSelected | multipleBlocksSelected | noBlockSelected);
}

const defaultAppState: AppState = {
  selection: {
    type: "noBlockSelected",
  },
};

const LogseqApp = () => {

  const [builtInCommands, setBuiltInCommands] = useState<Command[]>([]);
  const [userCommands, setUserCommands] = useState<Command[]>([]);
  const [appState, updateAppState] = useImmer<AppState>(defaultAppState);

  const openUI = async () => {
    const reloadedUserCommands = await loadUserCommands();
    setUserCommands(reloadedUserCommands);
    logseq.showMainUI({ autoFocus: true });
    setTimeout(() => {
      document.getElementById("logseq-openai-search")?.focus();
    }, 100);
  };

  React.useEffect(() => {
    const doLoadBuiltInCommands = async () => {
      const loadedBuiltInCommands = await loadBuiltInCommands();
      setBuiltInCommands(loadedBuiltInCommands);
    };

    doLoadBuiltInCommands();
  }, []);

  React.useEffect(() => {
    const doLoadUserCommands = async () => {
      const loadedUserCommands = await loadUserCommands();
      setUserCommands(loadedUserCommands);
    };
    doLoadUserCommands();
  }, []);

  React.useEffect(() => {
    if (logseq.settings!["popupShortcut"]) {
    logseq.App.registerCommandShortcut(
      {
        binding: logseq.settings!["popupShortcut"],
      },
      async () => {
        const activeText = await logseq.Editor.getEditingCursorPosition();
        const currentBlock = await logseq.Editor.getCurrentBlock();
        const currentPage = await logseq.Editor.getCurrentPage();
        const selectedBlocks = await logseq.Editor.getSelectedBlocks();
        if (selectedBlocks && selectedBlocks.length > 0) {
          updateAppState(draft => {
            draft.selection = {
              type: "multipleBlocksSelected",
              blocks: selectedBlocks,
            };
          });
        } else if (!activeText && !currentPage) {
          logseq.App.showMsg("Put cursor in block or navigate to specific page to use keyboard shortcut", "warning");
          return;
        } else if (activeText && currentBlock) {
          updateAppState(draft => {
            draft.selection = {
              type: "singleBlockSelected",
              block: currentBlock,
            };  
          });
        } else {
          updateAppState(draft => {
            draft.selection = {
              type: "noBlockSelected",
            };
          });
        }
        openUI();
      }
    );
    }
  }, []);

  React.useEffect(() => {
    logseq.Editor.registerBlockContextMenuItem("gpt", async (b) => {
      const block = await logseq.Editor.getBlock(b.uuid);
      if (block) {
        updateAppState(draft => {
          draft.selection = {
            type: "singleBlockSelected",
            block: block,
          };
        });
        openUI();
      }
    });

    logseq.Editor.registerSlashCommand("gpt", async (b) => {
      const block = await logseq.Editor.getBlock(b.uuid);
      if (block) {
        updateAppState(draft => {
          draft.selection = {
            type: "singleBlockSelected",
            block: block,
          };
        });
        openUI();
      }
    });
    logseq.Editor.registerSlashCommand("gpt-page", runGptPage);
    logseq.Editor.registerBlockContextMenuItem("gpt-page", runGptPage);

    logseq.Editor.registerSlashCommand("gpt-block", runGptBlock);// 这是gpt-block的快捷命令
    logseq.Editor.registerBlockContextMenuItem("gpt-block", runGptBlock);//这是gpt-block的右键菜单

    logseq.Editor.registerSlashCommand("dalle", runDalleBlock);
    logseq.Editor.registerBlockContextMenuItem("dalle", runDalleBlock);
    logseq.Editor.registerSlashCommand("whisper", runWhisper);
    logseq.Editor.registerBlockContextMenuItem("whisper", runWhisper);





    //fix1
    if (logseq.settings!["shortcutBlock"]) {
      logseq.App.registerCommandShortcut(
        { "binding": logseq.settings!["shortcutBlock"] },
        runGptBlock
      );
    }

    if (logseq.settings!["shortcutBlockH"]) {
      logseq.App.registerCommandShortcut(
        { "binding": logseq.settings!["shortcutBlockH"] },
        runGptBlockH
      );
    }
    if (logseq.settings!["shortcutBlockG"]) {
      logseq.App.registerCommandShortcut(
        { "binding": logseq.settings!["shortcutBlockG"] },
        runGptBlockG
      );
    }

    if (logseq.settings!["shortcutBlockT"]) {
      logseq.App.registerCommandShortcut(
        { "binding": logseq.settings!["shortcutBlockT"] },
        runGptBlockT
      );
    }

    if (logseq.settings!["shortcutBlockY"]) {
      logseq.App.registerCommandShortcut(
        { "binding": logseq.settings!["shortcutBlockY"] },
        runGptBlockY
      );
    }

    if (logseq.settings!["shortcutBlockU"]) {
      logseq.App.registerCommandShortcut(
        { "binding": logseq.settings!["shortcutBlockU"] },
        runGptBlockU
      );
    }

    if (logseq.settings!["shortcutBlockI"]) {
      logseq.App.registerCommandShortcut(
        { "binding": logseq.settings!["shortcutBlockI"] },
        runGptBlockI
      );
    }

    if (logseq.settings!["shortcutBlockO"]) {
      logseq.App.registerCommandShortcut(
        { "binding": logseq.settings!["shortcutBlockO"] },
        runGptBlockO
      );
    }




















  }, []);


  const allCommands = [...builtInCommands, ...userCommands];

  const handleCommand = async (command: Command, onContent: (content: string) => void): Promise<string> => {
    let inputText;
    if (appState.selection.type === "singleBlockSelected") {
      inputText = appState.selection.block.content;
    } else if (appState.selection.type === "multipleBlocksSelected") {
      inputText = appState.selection.blocks.map(b => b.content).join("\n");
    } else {
      inputText = "";
    }

    const openAISettings = getOpenaiSettings();
    // Set temperature of command instead of global temperature
    if (command.temperature!=null && !Number.isNaN(command.temperature)) {
      openAISettings.temperature = command.temperature;
    }
    const response = await openAIWithStream(command.prompt + inputText, openAISettings, onContent, () => {
    });
    if (response) {
      return response;
    } else {
      throw new Error("No OpenAI results.");
    }
  };

  const onInsert = async (text: string) => {
    let result = text;
    if (getOpenaiSettings().injectPrefix) {
      result = getOpenaiSettings().injectPrefix + result;
    }
    if (appState.selection.type === "singleBlockSelected") {
      if (appState.selection.block.content.length > 0) {
        logseq.Editor.insertBlock(appState.selection.block.uuid, result, {
          sibling: false,
        });
      } else {
        logseq.Editor.updateBlock(appState.selection.block.uuid, result);
      }
    } else if (appState.selection.type === "multipleBlocksSelected") {
      const lastBlock = appState.selection.blocks[appState.selection.blocks.length - 1];
      logseq.Editor.insertBlock(lastBlock.uuid, result, {
        sibling: true,
      });
    } else if (appState.selection.type === "noBlockSelected"){
      const currentPage = await logseq.Editor.getCurrentPage();
      if (currentPage) {
        logseq.Editor.appendBlockInPage(currentPage.uuid, result);
      }
    } else {
      console.error("Unknown selection type");
    }

    logseq.hideMainUI({ restoreEditingCursor: true });
  };

  const onReplace = async (text: string) => {
    let result = text;
    if (getOpenaiSettings().injectPrefix) {
      result = getOpenaiSettings().injectPrefix + result;
    }

    if (appState.selection.type === "singleBlockSelected") {
      logseq.Editor.updateBlock(appState.selection.block.uuid, result);
    } else if (appState.selection.type === "multipleBlocksSelected") {
      const firstBlock = appState.selection.blocks[0];
      logseq.Editor.updateBlock(firstBlock.uuid, result);
      if (appState.selection.blocks.length > 1) {
        const remainingBlocks = appState.selection.blocks.slice(1);
        const blocksToRemove = remainingBlocks.map(b => logseq.Editor.removeBlock(b.uuid));
        await Promise.all(blocksToRemove);
      }
    } else if (appState.selection.type === "noBlockSelected"){
      const currentPage = await logseq.Editor.getCurrentPage();
      if (currentPage) {
        logseq.Editor.appendBlockInPage(currentPage.uuid, result);
      }
    } else {
      console.error("Unknown selection type");
    }

    logseq.hideMainUI({ restoreEditingCursor: true });
  };

  const onClose = () => {
    logseq.hideMainUI({ restoreEditingCursor: true });
  };

  return (
    <LogseqAI
      commands={allCommands}
      handleCommand={handleCommand}
      onClose={onClose}
      onInsert={onInsert}
      onReplace={onReplace}
    />
  );
};
