## WSJ

| WER eval'92    | WER eval'93    | Paper          | Published | Notes   |
| :------------- | :------------- | :------------- | :-------- | :-----: |
| 3.47% | | [Deep Recurrent Neural Networks for Acoustic Modelling](http://arxiv.org/pdf/1504.01482v1.pdf) | April 2015 | TC-DNN-BLSTM-DNN |
| 3.5%  | 6.8%  | [Fully Convolutional Speech Recognition](https://arxiv.org/abs/1812.06864) | December 2018 | End-to-end CNN on the waveform + conv LM|
| 5.03% | 8.08% | [Deep Speech 2: End-to-End Speech Recognition in English and Mandarin](http://arxiv.org/abs/1512.02595v1) | December 2015 | *Humans* |
| 3.63% | 5.66% | [LibriSpeech: an ASR Corpus Based on Public Domain Audio Books](http://www.danielpovey.com/files/2015_icassp_librispeech.pdf) | 2015 | test-set on open vocabulary (i.e. harder), model = HMM-DNN + pNorm[*](http://www.danielpovey.com/files/2014_icassp_dnn.pdf) |
| 3.60% | 4.98% | [Deep Speech 2: End-to-End Speech Recognition in English and Mandarin](http://arxiv.org/abs/1512.02595v1) | December 2015 | 9-layer model w/ 2 layers of 2D-invariant convolution & 7 recurrent layers, w/ 100M parameters |
| 5.6% | | [Convolutional Neural Networks-based Continuous Speech Recognition using Raw Speech Signal](http://infoscience.epfl.ch/record/203464/files/Palaz_Idiap-RR-18-2014.pdf) | 2014 | CNN over RAW speech (wav) |
| 5.7%  | 8.7%  | [End-to-end Speech Recognition from the Raw Waveform](https://arxiv.org/abs/1806.07098) | June 2018 | End-to-end CNN on the waveform|
