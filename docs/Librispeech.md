## LibriSpeech

| WER test-clean | WER test-other | Paper          | Published | Notes   |
| :------------- | :------------- | :------------- | :-------- | :-----: |
| 5.83% | 12.69% | [Deep Speech 2: End-to-End Speech Recognition in English and Mandarin](http://arxiv.org/abs/1512.02595v1) | December 2015 | *Humans* |
| 3.19% | 7.64% | [The CAPIO 2017 Conversational Speech Recognition System](https://arxiv.org/abs/1801.00059) | April 2018 | TDNN + TDNN-LSTM + CNN-bLSTM + Dense TDNN-LSTM across two kinds of trees
| 3.80% | 8.76%  | [Semi-Orthogonal Low-Rank Matrix Factorization for Deep Neural Networks](http://www.danielpovey.com/files/2018_interspeech_tdnnf.pdf) | Interspeech, Sept 2018 |[Kaldi recipe](https://github.com/kaldi-asr/kaldi/blob/master/egs/librispeech/s5/local/chain/tuning/run_tdnn_1d.sh), 17-layer TDNN-F + iVectors|
| 3.44% | 11.24% | [Fully Convolutional Speech Recognition](https://arxiv.org/abs/1812.06864) | December 2018 | End-to-end CNN on the waveform + conv LM|
| 3.82% | 12.76% | [Improved training of end-to-end attention models for speech recognition](https://www-i6.informatik.rwth-aachen.de/publications/download/1068/Zeyer--2018.pdf) | Interspeech, Sept 2018 | encoder-attention-decoder end-to-end model |
| 4.28% | | [Purely sequence-trained neural networks for ASR based on lattice-free MMI](http://www.danielpovey.com/files/2016_interspeech_mmi.pdf) | September 2016 | HMM-TDNN trained with MMI + data augmentation (speed) + iVectors + 3 regularizations |
| 4.83% | | [A time delay neural network architecture for efficient modeling of long temporal contexts](http://speak.clsp.jhu.edu/uploads/publications/papers/1048_pdf.pdf) | 2015 | HMM-TDNN + iVectors |
| 5.33% | 13.25% | [Deep Speech 2: End-to-End Speech Recognition in English and Mandarin](http://arxiv.org/abs/1512.02595v1) | December 2015 | 9-layer model w/ 2 layers of 2D-invariant convolution & 7 recurrent layers, w/ 100M parameters trained on 11940h |
| 5.51% | 13.97% | [LibriSpeech: an ASR Corpus Based on Public Domain Audio Books](http://www.danielpovey.com/files/2015_icassp_librispeech.pdf) | 2015 | HMM-DNN + pNorm[*](http://www.danielpovey.com/files/2014_icassp_dnn.pdf) |
| 4.8%  | 14.5% | [Letter-Based Speech Recognition with Gated ConvNets](https://arxiv.org/abs/1712.09444) | December 2017 | (Gated) ConvNet for AM going to letters + 4-gram LM |
| 8.01% | 22.49% | same, [Kaldi](http://kaldi-asr.org/) | 2015 | HMM-(SAT)GMM |
| | 12.51% | [Audio Augmentation for Speech Recognition](http://www.danielpovey.com/files/2015_interspeech_augmentation.pdf) | 2015 | TDNN + pNorm + speed up/down speech |
