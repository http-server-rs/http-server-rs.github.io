---
title: Basic Authentication
description: Compression HTTP Server
sidebar_position: 4
---

Basic Authentication is supported to deny requests when credentials are invalid.
You must provide the allowed `username` and `password` either by using the CLI
options `--username` along with the desired username and `--password` along with
the desired password, or by specifying such values through the configuration
TOML file.

```toml
[basic_auth]
username = "John"
password = "Appleseed"
```