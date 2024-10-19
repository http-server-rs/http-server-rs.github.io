---
title: Proxy
description: Reference HTTP Server
sidebar_position: 5
---

The HTTP Server is able to proxy requests to a specified URL.

When using the proxy, the FileExplorer won't be available, as the proxy is
an alternate _Request Handler_.

The config TOML file can be used to provide proxy configurations:

```toml
[proxy]
url = "https://example.com"
```