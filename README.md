# NestJS Analytics and User Module

This is a module for NestJS that provides analytics and user management features. This project is a NestJS application that includes an Analytics module for tracking and reporting application metrics and user behavior. The project uses MongoDB for data storage and Mongoose as the ODM (Object Data Modeling) library. It also uses Prometheus — a tool for collecting metrics and monitoring services.

Once published to npm, it can be used in other projects like this:

````typescript
import { AnalyticsModule } from 'analytics-module';


## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/caesarkutaa/Nestjs-Analytics-module.git
   cd nestjs-analytics-module
````

2. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root of the project and add the following content:

   ```env
   MONGODB_URI=mongodb://username:password@localhost:27017/nest
   ```

## Running the Application

Start the NestJS application:

```bash
npm run start
```
