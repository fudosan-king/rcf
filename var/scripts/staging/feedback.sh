#!/bin/bash
source ./var/.env

PROJECT_PATH=prostyle-residence/sapporo/miyanomori
FROM_PATH=$STG_DATA_SRC/$PROJECT_PATH
TO_PATH=$LOCAL_SRC/$PROJECT_PATH

rsync $OPTIONS --exclude-from=$EXCLUDE_SRC_GET -e "ssh -i $KEY_PATH" $STG_ADDRESS:$FROM_PATH/ $TO_PATH/