#!/bin/bash
source ./var/.env

yarn --cwd $(pwd)/base-vue/ install


if [ ! -z "$1" ] && [ "$1" == "--build" ]
then
    yarn --cwd $(pwd)/base-vue/ build
fi

# VUE SOURCES
DIST_PATH=dist
FROM_PATH=$LOCAL_VUE_SRC/$DIST_PATH
TO_PATH=$STG_RCF_SRC/$DIST_PATH

# echo "rsync $OPTIONS --delete --exclude-from=$EXCLUDE_SRC_PUSH -e \"ssh -i $KEY_PATH\" $FROM_PATH/ $STG_EC2_ADDRESS:$TO_PATH/"
rsync $OPTIONS --delete --exclude-from=$EXCLUDE_SRC_PUSH -e "ssh -i $STG_EC2_KEY" $FROM_PATH/ $STG_EC2_ADDRESS:$TO_PATH/

printf "\n\n${0##*\/}: Completed at http://vue-dev.rimawaru.com/ ...\n"