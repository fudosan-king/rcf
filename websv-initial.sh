#!/bin/bash

# if [[ "$OSTYPE" == "linux-gnu"* ]]; then
#     sudo usermod -aG docker $USER
# fi

# /etc/hosts config
# ./var/shell/vhost-add.sh

yarn --cwd $(pwd)/base-vue/ install
printf "\n${0##*\/}: Yarn install modules of base-vue successful ..."

# SSH keys set permission
chmod 600 ./var/ssh_key/*.pem
printf "\n${0##*\/}: SSH keys set permission successful ..."

printf "\n\n${0##*\/}: Completed ...\n"