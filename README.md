# User interface for Medilearn STUDIO

Medilearn Studio's UI was made with Solid Start, a meta framework that uses SolidJS FE and allows to use Static Generation (SG), Server-Side Rendering (SSR) and Hydration. 

This allows caching static pages, while harvesting the resources mainly for generating dynamic content and fetching the database. 

The UI is running on Docker and make API calls to a traditional REST API coded in C# (ASP.NET). Medilearn Studio is part of a larger micro-services architecture ecosystem, MediLearn Network.

Authentication and authorization are delegated to other microservices : Ory Network. The Client connects to the Identity Server (Ory Hydra) via SSO/OAuth2.0. 