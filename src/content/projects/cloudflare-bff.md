---
title: "Cloudflare BFF Architecture"
description: "Designed and implemented a Backend-for-Frontend pattern on Cloudflare Workers — acting as API gateway, auth layer, and data orchestrator between Vue frontend and downstream services."
stack: ["Cloudflare Workers", "TypeScript", "Vue 3", "GraphQL"]
role: "Lead Engineer"
period: "2023–2024"
featured: true
order: 1
---

## Overview

Led the architecture and implementation of a BFF layer deployed on Cloudflare's edge network, consolidating multiple downstream API calls into purpose-built frontend endpoints.

## Problem

The Vue application was making 4–6 separate API calls per page load, with auth logic duplicated on the client. Response shapes were dictated by backend service boundaries, not frontend needs.

## Solution

Designed a Cloudflare Workers BFF that:
- Acts as a single entry point for all frontend requests
- Handles authentication and session validation at the edge
- Aggregates and reshapes downstream responses per use case
- Caches aggressively with stale-while-revalidate where appropriate

## Outcome

- Page load data-fetch round trips reduced from 4–6 to 1
- Auth logic centralised and auditable
- Frontend completely decoupled from backend service topology
