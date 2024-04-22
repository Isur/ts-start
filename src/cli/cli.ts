#!/usr/bin/env node

/* eslint-disable no-console */

const [, , ...args] = process.argv;

export function cli(args: Array<string>) {
  console.log("Args: ", args);
}

cli(args);
