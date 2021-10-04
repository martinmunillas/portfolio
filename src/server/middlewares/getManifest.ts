import type { RequestHandler } from "express";

const fs = require("fs");

const getObjectManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(__dirname + "/../public/manifest.json"));
  } catch (error) {
    console.log(error);
  }
};

const getManifest: RequestHandler = (req, _res, next) => {
  if (!req.hashManifest) req.hashManifest = getObjectManifest();
  next();
};

export default getManifest;
