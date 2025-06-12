# OpenBlock Link

[![Publish Npm Package](https://github.com/openblockcc/openblock-link/actions/workflows/publish-npm-package.yml/badge.svg)](https://github.com/openblockcc/openblock-link/actions/workflows/publish-npm-package.yml)
![](https://img.shields.io/github/license/openblockcc/openblock-link)

一个为 OpenBlock 提供本地硬件连接功能的服务器，支持串口通信和硬件设备管理。

## 📖 项目介绍

OpenBlock Link 是一个 Node.js 服务器，为 OpenBlock 编程环境提供与本地硬件设备（如 Arduino、ESP32、micro:bit 等）的连接功能。它通过 WebSocket 提供实时通信接口，支持设备发现、连接、程序上传和数据传输。

## ✨ 主要功能

- 🔌 **串口设备管理** - 自动发现和管理串口设备
- 🌐 **WebSocket 通信** - 提供实时双向通信接口
- 📡 **设备连接** - 支持多种硬件设备连接
- 🔄 **程序上传** - 支持固件和程序上传到硬件设备
- 🛠️ **工具集成** - 集成编译和烧录工具

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 下载工具和固件

```bash
npm run fetch
```

### 启动服务器

```bash
# 正常模式启动
npm start

# 调试模式启动
npm run start:debug
```

服务器启动后会监听端口 `20111`，您可以通过 http://localhost:20111 访问。

## 📝 API 接口

### HTTP 接口

- `GET /` - 返回服务器标识信息

### WebSocket 接口

连接地址：`ws://localhost:20111/openblock/serialport`

#### 设备发现

```json
{
    "jsonrpc": "2.0",
    "method": "discover",
    "params": {
        "filters": {
            "pnpid": ["*"]
        }
    },
    "id": 1
}
```

#### 设备连接

```json
{
    "jsonrpc": "2.0",
    "method": "connect",
    "params": {
        "peripheralId": "/dev/ttyUSB0",
        "peripheralConfig": {
            "config": {
                "baudRate": 115200,
                "dataBits": 8,
                "stopBits": 1
            }
        }
    },
    "id": 2
}
```

## 🛠️ 开发

### 代码检查

```bash
npm run lint
```

### 生成文档

```bash
npm run docs
```

### 清理

```bash
npm run clean
```

## 🔧 配置

- **默认端口**: 20111
- **默认主机**: 0.0.0.0
- **用户数据路径**: `../.openblockData/link`
- **工具路径**: `../tools`

## 🐛 故障排除

### 端口占用问题

如果端口 20111 被占用，请检查：

```bash
# macOS/Linux
lsof -i :20111

# Windows
netstat -ano | findstr :20111
```

### 串口权限问题

在 Linux/macOS 上，可能需要添加用户到相应组：

```bash
# Linux
sudo usermod -a -G dialout $USER

# macOS
sudo dseditgroup -o edit -a $USER -t user wheel
```

### Windows BLE 连接

如果在 Windows 上使用蓝牙连接，请参考：[https://github.com/noble/noble](https://github.com/noble/noble)

## 📦 依赖升级 (2024)

本项目的依赖已升级到最新版本，包括：

- **Node.js 依赖**：升级到兼容的最新版本
- **安全修复**：修复了已知的安全漏洞
- **性能优化**：提升了整体性能和稳定性
- **现代化工具**：使用了最新的开发工具链

主要升级：
- `serialport`: 10.4.0 → 12.0.0
- `ws`: 7.1.1 → 8.18.0
- `eslint`: 5.3.0 → 8.57.1
- `@babel/eslint-parser`: 替代了过时的 `babel-eslint`

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目基于原项目许可证分发。详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

**特别感谢原作者和 OpenBlock 团队！**

本项目 fork 自 [OpenBlockCC/openblock-link](https://github.com/openblockcc/openblock-link)，感谢原作者和整个 OpenBlock 社区的杰出工作。他们为开源硬件编程教育做出了巨大贡献，让更多人能够轻松地进行创意编程和硬件开发。

- 🎯 **原项目地址**: https://github.com/openblockcc/openblock-link
- 👥 **OpenBlock 社区**: https://github.com/openblockcc
- 💻 **OpenBlock 编辑器**: https://github.com/openblockcc/openblock

感谢所有为这个项目做出贡献的开发者和维护者！

---

## 🔗 相关链接

- [OpenBlock 官网](https://openblock.cc/)
- [OpenBlock 文档](https://wiki.openblock.cc/)
- [原项目仓库](https://github.com/openblockcc/openblock-link)
- [问题反馈](https://github.com/lenzhang/openblock-link/issues)
