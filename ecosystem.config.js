module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "Slan Roguelike",
      script: "yarn",
      args: "start",
      watch: false,
      max_memory_restart: "120M",
      interpreter: "node@14.18.1",
    },
  ],
};
