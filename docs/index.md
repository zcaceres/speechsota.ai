wer_are_we
WER are we? An attempt at tracking states of the art(s) and recent results on speech recognition. Feel free to correct! (Inspired by Are we there yet?)

WER
LibriSpeech
(Possibly trained on more data than LibriSpeech.)

WER test-clean	WER test-other	Paper	Published	Notes
5.83%	12.69%	Deep Speech 2: End-to-End Speech Recognition in English and Mandarin	December 2015	Humans
3.19%	7.64%	The CAPIO 2017 Conversational Speech Recognition System	April 2018	TDNN + TDNN-LSTM + CNN-bLSTM + Dense TDNN-LSTM across two kinds of trees
3.80%	8.76%	Semi-Orthogonal Low-Rank Matrix Factorization for Deep Neural Networks	Interspeech, Sept 2018	Kaldi recipe, 17-layer TDNN-F + iVectors
3.44%	11.24%	Fully Convolutional Speech Recognition	December 2018	End-to-end CNN on the waveform + conv LM
3.82%	12.76%	Improved training of end-to-end attention models for speech recognition	Interspeech, Sept 2018	encoder-attention-decoder end-to-end model
4.28%		Purely sequence-trained neural networks for ASR based on lattice-free MMI	September 2016	HMM-TDNN trained with MMI + data augmentation (speed) + iVectors + 3 regularizations
4.83%		A time delay neural network architecture for efficient modeling of long temporal contexts	2015	HMM-TDNN + iVectors
5.33%	13.25%	Deep Speech 2: End-to-End Speech Recognition in English and Mandarin	December 2015	9-layer model w/ 2 layers of 2D-invariant convolution & 7 recurrent layers, w/ 100M parameters trained on 11940h
5.51%	13.97%	LibriSpeech: an ASR Corpus Based on Public Domain Audio Books	2015	HMM-DNN + pNorm*
4.8%	14.5%	Letter-Based Speech Recognition with Gated ConvNets	December 2017	(Gated) ConvNet for AM going to letters + 4-gram LM
8.01%	22.49%	same, Kaldi	2015	HMM-(SAT)GMM
12.51%	Audio Augmentation for Speech Recognition	2015	TDNN + pNorm + speed up/down speech
WSJ
(Possibly trained on more data than WSJ.)

WER eval'92	WER eval'93	Paper	Published	Notes
3.47%		Deep Recurrent Neural Networks for Acoustic Modelling	April 2015	TC-DNN-BLSTM-DNN
3.5%	6.8%	Fully Convolutional Speech Recognition	December 2018	End-to-end CNN on the waveform + conv LM
5.03%	8.08%	Deep Speech 2: End-to-End Speech Recognition in English and Mandarin	December 2015	Humans
3.63%	5.66%	LibriSpeech: an ASR Corpus Based on Public Domain Audio Books	2015	test-set on open vocabulary (i.e. harder), model = HMM-DNN + pNorm*
3.60%	4.98%	Deep Speech 2: End-to-End Speech Recognition in English and Mandarin	December 2015	9-layer model w/ 2 layers of 2D-invariant convolution & 7 recurrent layers, w/ 100M parameters
5.6%		Convolutional Neural Networks-based Continuous Speech Recognition using Raw Speech Signal	2014	CNN over RAW speech (wav)
5.7%	8.7%	End-to-end Speech Recognition from the Raw Waveform	June 2018	End-to-end CNN on the waveform
Hub5'00 Evaluation (Switchboard / CallHome)
(Possibly trained on more data than SWB, but test set = full Hub5'00.)

WER (SWB)	WER (CH)	Paper	Published	Notes
5.0%	9.1%	The CAPIO 2017 Conversational Speech Recognition System	December 2017	2 Dense LSTMs + 3 CNN-bLSTMs across 3 phonesets from previous Capio paper & AM adaptation using parameter averaging (5.6% SWB / 10.5% CH single systems)
5.1%	9.9%	Language Modeling with Highway LSTM	September 2017	HW-LSTM LM trained with Switchboard+Fisher+Gigaword+Broadcast News+Conversations, AM from previous IBM paper
5.1%		The Microsoft 2017 Conversational Speech Recognition System	August 2017	~2016 system + character-based dialog session aware (turns of speech) LSTM LM
5.3%	10.1%	Deep Learning-based Telephony Speech Recognition in the Wild	August 2017	Ensemble of 3 CNN-bLSTM (5.7% SWB / 11.3% CH single systems)
5.5%	10.3%	English Conversational Telephone Speech Recognition by Humans and Machines	March 2017	ResNet + BiLSTMs acoustic model, with 40d FMLLR + i-Vector inputs, trained on SWB+Fisher+CH, n-gram + model-M + LSTM + Strided (à trous) convs-based LM trained on Switchboard+Fisher+Gigaword+Broadcast
6.3%	11.9%	The Microsoft 2016 Conversational Speech Recognition System	September 2016	VGG/Resnet/LACE/BiLSTM acoustic model trained on SWB+Fisher+CH, N-gram + RNNLM language model trained on Switchboard+Fisher+Gigaword+Broadcast
6.6%	12.2%	The IBM 2016 English Conversational Telephone Speech Recognition System	June 2016	RNN + VGG + LSTM acoustic model trained on SWB+Fisher+CH, N-gram + "model M" + NNLM language model
8.5%	13%	Purely sequence-trained neural networks for ASR based on lattice-free MMI	September 2016	HMM-BLSTM trained with MMI + data augmentation (speed) + iVectors + 3 regularizations + Fisher
9.2%	13.3%	Purely sequence-trained neural networks for ASR based on lattice-free MMI	September 2016	HMM-TDNN trained with MMI + data augmentation (speed) + iVectors + 3 regularizations + Fisher (10% / 15.1% respectively trained on SWBD only)
12.6%	16%	Deep Speech: Scaling up end-to-end speech recognition	December 2014	CNN + Bi-RNN + CTC (speech to letters), 25.9% WER if trained only on SWB
11%	17.1%	A time delay neural network architecture for efficient modeling of long temporal contexts	2015	HMM-TDNN + iVectors
12.6%	18.4%	Sequence-discriminative training of deep neural networks	2013	HMM-DNN +sMBR
12.9%	19.3%	Audio Augmentation for Speech Recognition	2015	HMM-TDNN + pNorm + speed up/down speech
15%	19.1%	Building DNN Acoustic Models for Large Vocabulary Speech Recognition	June 2014	DNN + Dropout
10.4%		Joint Training of Convolutional and Non-Convolutional Neural Networks	2014	CNN on MFSC/fbanks + 1 non-conv layer for FMLLR/I-Vectors concatenated in a DNN
11.5%		Deep Convolutional Neural Networks for LVCSR	2013	CNN
12.2%		Very Deep Multilingual Convolutional Neural Networks for LVCSR	September 2015	Deep CNN (10 conv, 4 FC layers), multi-scale feature maps
11.8%	25.7%	Improved training of end-to-end attention models for speech recognition	Interspeech, Sept 2018	encoder-attention-decoder end-to-end model, trained on 300h SWB
Rich Transcriptions
WER RT-02	WER RT-03	WER RT-04	Paper	Published	Notes
8.1%	8.0%		The CAPIO 2017 Conversational Speech Recognition System	April 2018	2 Dense LSTMs + 3 CNN-bLSTMs across 3 phonesets from previous Capio paper & AM adaptation using parameter averaging
8.2%	8.1%	7.7%	Language Modeling with Highway LSTM	September 2017	HW-LSTM LM trained with Switchboard+Fisher+Gigaword+Broadcast News+Conversations, AM from previous IBM paper
8.3%	8.0%	7.7%	English Conversational Telephone Speech Recognition by Humans and Machines	March 2017	ResNet + BiLSTMs acoustic model, with 40d FMLLR + i-Vector inputs, trained on SWB+Fisher+CH, n-gram + model-M + LSTM + Strided (à trous) convs-based LM trained on Switchboard+Fisher+Gigaword+Broadcast
Fisher (RT03S FSH)
WER	Paper	Published	Notes
9.6%	Purely sequence-trained neural networks for ASR based on lattice-free MMI	September 2016	HMM-BLSTM trained with MMI + data augmentation (speed) + iVectors + 3 regularizations + SWBD
9.8%	Purely sequence-trained neural networks for ASR based on lattice-free MMI	September 2016	HMM-TDNN trained with MMI + data augmentation (speed) + iVectors + 3 regularizations + SWBD
TED-LIUM
WER Test	Paper	Published	Notes
6.5%	The CAPIO 2017 Conversational Speech Recognition System	April 2018	TDNN + TDNN-LSTM + CNN-bLSTM + Dense TDNN-LSTM across two kinds of trees
11.2%	Purely sequence-trained neural networks for ASR based on lattice-free MMI	September 2016	HMM-TDNN trained with LF-MMI + data augmentation (speed perturbation) + iVectors + 3 regularizations
15.3%	TED-LIUM: an Automatic Speech Recognition dedicated corpus	May 2014	Multi-layer perceptron (MLP) with bottle-neck feature extraction
CHiME (noisy speech)
clean	real	sim	Paper	Published	Notes
3.34%	21.79%	45.05%	Deep Speech 2: End-to-End Speech Recognition in English and Mandarin	December 2015	9-layer model w/ 2 layers of 2D-invariant convolution & 7 recurrent layers, w/ 68M parameters
6.30%	67.94%	80.27%	Deep Speech: Scaling up end-to-end speech recognition	December, 2014	CNN + Bi-RNN + CTC (speech to letters)
TODO

PER
TIMIT
(So far, all results trained on TIMIT and tested on the standard test set.)

PER	Paper	Published	Notes
16.5%	Phone recognition with hierarchical convolutional deep maxout networks	September 2015	Hierarchical maxout CNN + Dropout
16.5%	A Regularization Post Layer: An Additional Way how to Make Deep Neural Networks Robust	2017	DBN with last layer regularization
16.7%	Combining Time- and Frequency-Domain Convolution in Convolutional Neural Network-Based Phone Recognition	2014	CNN in time and frequency + dropout, 17.6% w/o dropout
17.3%	Segmental Recurrent Neural Networks for End-to-end Speech Recognition	March 2016	RNN-CRF on 24(x3) MFSC
17.6%	Attention-Based Models for Speech Recognition	June 2015	Bi-RNN + Attention
17.7%	Speech Recognition with Deep Recurrent Neural Networks	March 2013	Bi-LSTM + skip connections w/ RNN transducer (18.4% with CTC only)
18.0%	Learning Filterbanks from Raw Speech for Phone Recognition	October 2017	Complex ConvNets on raw speech w/ mel-fbanks init
18.8%	Wavenet: A Generative Model For Raw Audio	September 2016	Wavenet architecture with mean pooling layer after residual block + few non-causal conv layers
23%	Deep Belief Networks for Phone Recognition	2009	(first, modern) HMM-DBN
LM
TODO

Noise-robust ASR
TODO

BigCorp™®-specific dataset
TODO?

Lexicon
WER: word error rate
PER: phone error rate
LM: language model
HMM: hidden markov model
GMM: Gaussian mixture model
DNN: deep neural network
CNN: convolutional neural network
DBN: deep belief network (RBM-based DNN)
TDNN-F: a factored form of time delay neural networks (TDNN)
RNN: recurrent neural network
LSTM: long short-term memory
CTC: connectionist temporal classification
MMI: maximum mutual information (MMI),
MPE: minimum phone error
sMBR: state-level minimum Bayes risk
SAT: speaker adaptive training
MLLR: maximum likelihood linear regression
LDA: (in this context) linear discriminant analysis
MFCC: Mel frequency cepstral coefficients
FB/FBANKS/MFSC: Mel frequency spectral coefficients
VGG: very deep convolutional neural networks from Visual Graphics Group, VGG is an architecture of 2 {3x3 convolutions} followed by 1 pooling, repeated
