## Rich Transcriptions

| WER RT-02 | WER RT-03 | WER RT-04 | Paper          | Published | Notes   |
| :-------  | :-------- | :-------- | :------------- | :-------- | :-----: |
| 8.1% | 8.0%  |       | [The CAPIO 2017 Conversational Speech Recognition System](https://arxiv.org/abs/1801.00059) | April 2018 | 2 Dense LSTMs + 3 CNN-bLSTMs across 3 phonesets from [previous Capio paper](https://pdfs.semanticscholar.org/d0ec/cd60d800308cd6e59810769b92b40961c09a.pdf) & AM adaptation using parameter averaging  |
| 8.2% | 8.1%  | 7.7%  | [Language Modeling with Highway LSTM](https://arxiv.org/abs/1709.06436) | September 2017 | HW-LSTM LM trained with Switchboard+Fisher+Gigaword+Broadcast News+Conversations, AM from [previous IBM paper](https://arxiv.org/abs/1703.02136)|
| 8.3% | 8.0%  | 7.7%  | [English Conversational Telephone Speech Recognition by Humans and Machines](https://arxiv.org/abs/1703.02136) | March 2017 | ResNet + BiLSTMs acoustic model, with 40d FMLLR + i-Vector inputs, trained on SWB+Fisher+CH, n-gram + model-M + LSTM + Strided (à trous) convs-based LM trained on Switchboard+Fisher+Gigaword+Broadcast |
