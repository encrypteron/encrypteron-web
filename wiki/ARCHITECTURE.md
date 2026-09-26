# Wiki architecture and deployment boundary

The current implementation is a static, read-only public Wiki in the Encrypteron site. Public pages use no persistent store and cannot write article data. There is no admin build yet.

The intended next stage is a shared repository with separate public and private application builds. The public runtime may read only a database view containing published public fields. A separately deployed admin runtime owns authenticated writes. PostgreSQL stays on a private network reachable only by those runtimes. The private service must listen only behind a LAN/VPN proxy and host/network firewall; do not publish DNS, public listeners, or NAT forwarding for it.

Network authorization, application identity, and per-operation authorization are separate controls. A private network is not a substitute for authentication. Middleware is not the network boundary. Proxy and firewall requirements are deployment work and have not been verified by this repository.

Do not add admin URLs or source to the public build. Future admin responses must use `no-store` and noindex headers as supplemental controls. No such endpoint currently exists.
