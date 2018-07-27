module.exports = {
    development: {
        client: "pg",
        connection: "postgres://localhost:/gmemory-one"
    },

    production: {
        client: "pg",
        connection: process.env.DATABASE_URL
    }
};
