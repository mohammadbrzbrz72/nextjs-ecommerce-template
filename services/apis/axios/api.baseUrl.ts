interface IOrigin {
  protocol: string;
  host: string;
  version: string;
}

function origin(this: IOrigin) {
  return `${this.protocol}://${this.host}/${this.version}/`;
}

const isDevelopment = process.env.NODE_ENV === "development";

const urlConfigs = {
  development: {
    protocol: "http",
    host: "api.something.io",
    version: "v1",
  },
  production: {
    protocol: "https",
    host: "api.something.io",
    version: "v1",
  },
};

export default origin.apply(
  urlConfigs[isDevelopment ? "development" : "production"]
);
