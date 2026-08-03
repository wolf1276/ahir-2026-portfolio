% File: resume.cls
% ------------------------------------------------------------
% A minimal, ATS‑friendly, single‑column resume class.
% ------------------------------------------------------------
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{resume}[2024/08/03 v1.0 Professional Resume]

% ---- Packages ------------------------------------------------
\LoadClass[11pt,a4paper]{article}
\RequirePackage[a4paper,margin=0.7in]{geometry}
\RequirePackage{hyperref}
\RequirePackage{titlesec}
\RequirePackage{enumitem}
\RequirePackage{setspace}
\RequirePackage{fontspec} % for Times New Roman (fallback to Times)
\RequirePackage{xcolor}
\RequirePackage{parskip}

% ---- Font ----------------------------------------------------
\IfFileExists{times.ttf}{
  \setmainfont{Times New Roman}
}{
  \renewcommand{\familydefault}{\rmdefault} % fallback to Times
}

% ---- Hyperref (black & white links) ---------------------------
\hypersetup{
  colorlinks=true,
  urlcolor=black,
  linkcolor=black,
  citecolor=black,
  pdfborder={0 0 0},
  breaklinks=true,
}

% ---- Section formatting ---------------------------------------
\titleformat{\section}
  {\large\bfseries}
  {}{0pt}{}
\titlespacing*{\section}{0pt}{1.5ex}{0.5ex}
\newcommand{\sectionrule}{
  \vspace{0.4ex}\hrule\vspace{1ex}
}

% ---- Helper macros -------------------------------------------
% Header: name (large, bold) and contact line
\newcommand{\name}[1]{
  \begin{center}
    {\LARGE\bfseries #1}\\[0.2ex]
  \end{center}
}
\newcommand{\contact}[1]{
  \begin{center}
    \small #1
  \end{center}
}

% Section command (adds rule automatically)
\newcommand{\mysection}[1]{
  \section*{#1}
  \sectionrule
}

% Entry: title, organization, dates (right aligned), description
\newcommand{\entry}[5]{%
  \noindent\textbf{#1} \hfill {\small #2}\\
  \noindent\textit{#3} \hfill {\small #4}\\
  #5\par\vspace{0.8ex}
}
% Wrapper that allows a description block after the three mandatory args
\newcommand{\entrydesc}[5]{%
  \noindent\textbf{#1} \hfill {\small #2}\\
  \noindent\textit{#3} \hfill {\small #4}\\
  \begin{itemize}[leftmargin=*,label=--,nosep,topsep=0pt]
    #5
  \end{itemize}
  \vspace{0.8ex}
}

% Simple bullet list (no extra vertical space)
\newenvironment{myitemize}{
  \begin{itemize}[leftmargin=*,label=--,nosep,topsep=0pt]
}{\end{itemize}}

% ------------------------------------------------------------
% End of class
% ------------------------------------------------------------