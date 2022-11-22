# Dtslint Scan Performancetest

## Usage

### Step 1
- In case no current NodeJS version (>=16.x) is installed, install it from https://nodejs.org/dist/latest-v16.x/node-v16.18.1-x64.msi

### Step 2
Download and unzip the content of this repository from https://github.com/akudev/scan-dtslint-performancetest/archive/refs/heads/main.zip
or - if a git client is installed - simply do:
```sh
git clone https://github.com/akudev/scan-dtslint-performancetest.git
```

### Step 3
Open a command prompt, change into the directory where you have just put the content of this repository and then trigger the following commands:
```sh
npm install
npm start
```

### Step 4
Now run `npm start` several times to get a somewhat stable reading - the first time is often slower.

The duration is printed on the command line when finished.

Make it run in a location where the on-access scanner is not active, which could be distorting the result.