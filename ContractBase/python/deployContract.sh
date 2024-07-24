#!/bin/bash

cd ../Upgradeable
if [ ${1} == "accounts" ] ; then
	yarn accounts
elif [ ${1} == "clean1" ] ; then
	yarn clean1
elif [ ${1} == "clean" ] ; then
	yarn clean
elif [ ${1} == "compile" ] ; then
	yarn compile
elif [ ${1} == "deploy1" ] ; then
	npx hardhat run scripts/deployv1.js
else
	exit -1
fi
