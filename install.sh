#!/usr/bin/env bash
set -o errexit
templates_name="retrotcdw"

if [ $(basename `pwd`) != "templates" ];then
    echo "[Error] Please do this in the templates directory!"
    exit
fi
if [ ! -d ${templates_name} ]; then
    git clone https://github.com/SilverBlogTheme/${templates_name}.git
fi
ln -sv ../${templates_name}/static ./static/${templates_name}
cd ${templates_name}
if [ -f "config.example.json" ]; then
    cp config.example.json config.json
fi
if [ -f "custom/links.example.html" ]; then
    cp custom/links.example.html custom/links.html
fi
if [ -f "custom/sidebar.example.html" ]; then
    cp custom/sidebar.example.html custom/sidebar.html
fi