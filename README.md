# Orfeo 简体中文汉化版

> [!IMPORTANT]
> 本仓库是 [Squarebow/Orfeo](https://github.com/Squarebow/Orfeo) 的**非官方社区汉化版本**，不是 Orfeo 官方发布的语言包或安装包。

Orfeo 是一款免费、开源的 Windows 桌面钢琴学习软件，可以把 MIDI 文件变成交互式钢琴学习界面。它支持瀑布流钢琴卷帘、变速、移调、循环练习、节拍器、和弦识别、音轨混音、MIDI 编辑和硬件 MIDI 键盘输入。

本汉化版在保留原有 MIDI、音频、音符及音色处理逻辑的前提下，为主要界面接入简体中文翻译。

[![上游版本](https://img.shields.io/badge/上游版本-1.5.4-blue)](https://github.com/Squarebow/Orfeo)
[![平台](https://img.shields.io/badge/平台-Windows-lightgrey?logo=windows)](https://github.com/Squarebow/Orfeo)
[![许可证](https://img.shields.io/badge/许可证-GPLv3-blue)](LICENSE.md)

## 汉化说明

当前版本基于以下官方源码制作：

- 上游项目：`Squarebow/Orfeo`
- 上游版本：`1.5.4`
- 上游提交：`7a0f75e57cc4e2f75f51be7dfde04d2ad4738648`
- 翻译词条：812 条

已重点汉化：

- 设置向导和设置面板
- MIDI 曲库、搜索、收藏及文件操作
- 播放控制、速度、调性、循环和节拍器
- 音轨面板、静音、独奏及专注模式
- MIDI 播放编辑器
- MIDI 音符编辑器及常用确认对话框
- 文件信息、导入、保存及错误提示

文件名、曲名、音轨名、乐器名称和用户输入内容会保留原值，避免翻译逻辑误改个人数据。

## 当前状态

已完成以下验证：

- 812 条英文目录与中文目录完整对应
- 动态占位符检查通过，缺失及错配数量为 0
- `npm run typecheck` 通过
- 开发版实际启动通过
- 设置、曲库、播放、音轨和 MIDI 编辑界面烟雾测试通过
- `npm run dist:portable` Windows 便携版构建通过
- 构建后的便携版实际启动通过

仍有少量尚未接入国际化接口的探索器、控制台混音器、图形画布文字及复杂动态提示可能显示英文。欢迎继续补充，但请勿使用全局 DOM 文本替换，以免误改用户的文件名或音轨名。

## 获取源码

```powershell
git clone https://github.com/Ylong4004/Orfeo-zh-CN.git
cd Orfeo-zh-CN
```

本仓库提供汉化后的完整源码。超大体积的构建产物不会直接提交到 Git 历史中。

## 本地运行

开发环境需要：

- Windows 10 或 Windows 11
- Node.js 22.12 或更高版本
- Git

安装依赖并启动：

```powershell
npm ci --no-audit --no-fund
npm run dev
```

类型检查：

```powershell
npm run typecheck
```

## 构建中文便携版

除 Node.js 外，完整便携版构建还需要：

- Rust `stable-x86_64-pc-windows-msvc`
- Visual Studio C++ 生成工具

执行：

```powershell
npm ci --no-audit --no-fund
npm run dist:portable
```

构建完成后，便携版位于：

```text
release/Orfeo-1.5.4-portable.exe
```

便携版会在 EXE 同级目录创建 `Orfeo-Data` 保存设置和缓存，不会修改系统中已安装的官方 Orfeo 数据。

## 汉化实现

主要相关文件：

- `src/utils/i18n.ts`：翻译入口及动态占位符处理
- `src/utils/orfeoZhCN.ts`：简体中文翻译表
- `src/i18n/locales/en.json`：从源码提取的英文消息目录
- 各界面组件：使用 `t(...)` 接入静态 UI 文本

本项目不修改 MIDI 解析、播放、音符编辑、音色合成或音频输出算法。汉化工作只应调整界面文字和国际化接线。

## 与上游同步

本仓库保留上游 Git 历史。同步官方更新前请先检查 Orfeo 是否已经引入正式国际化框架，并重新运行类型检查、开发版测试和便携版构建。

官方项目及英文文档：

- [Squarebow/Orfeo](https://github.com/Squarebow/Orfeo)
- [Orfeo 官方使用手册](https://orfeo.cc/docs)

发现与汉化无关的程序问题时，请先确认该问题能否在官方版本复现；官方版本问题应反馈到上游项目。

## 许可证与致谢

本项目继承上游项目的 [GNU General Public License v3.0](LICENSE.md)。分发修改版本时请遵守 GPLv3，并保留原作者版权、许可证及源码获取方式。

感谢 [Squarebow](https://github.com/Squarebow) 及 Orfeo 的所有贡献者。本仓库的中文翻译和界面接入由社区维护，与上游作者没有官方隶属或背书关系。
