# Dtslint Scan Performancetest

## Usage

Prerequisites:
- git client
  - only for the first command; alternatively the project can be downloaded from https://github.com/akudev/scan-dtslint-performancetest/archive/refs/heads/main.zip and manually unzipped
- Current NodeJS (>=16.x) with npm

```sh
git clone https://github.com/akudev/scan-dtslint-performancetest.git
cd scan-dtslint-performancetest
npm install
npm start
```

Run `npm start` several times to get a somewhat stable reading - the first time is often slower.

The duration is printed on the command line when finished.