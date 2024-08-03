FROM quay.io/toxic_kichux/whatskrizai:latest
RUN git clone https://github.com/PREXZYBOOSTER/QUEEN-PRIYA-V1 /root/QUEEN-PRIYA-V1/
WORKDIR /root/QUEEN-PRIYA-V1/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js", "--max_old_space_size=2560"]
