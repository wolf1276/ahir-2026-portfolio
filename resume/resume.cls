\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{resume}[2026 Professional Resume Class]

\LoadClass[11pt,a4paper]{article}

\RequirePackage[a4paper,margin=0.65in]{geometry}
\RequirePackage{titlesec}
\RequirePackage{enumitem}
\RequirePackage{hyperref}
\RequirePackage{xcolor}
\RequirePackage{parskip}
\RequirePackage{tabularx}
\RequirePackage{array}
\RequirePackage{ifthen}

\pagestyle{empty}

%---------------------------------
% Hyperlinks
%---------------------------------

\hypersetup{
    colorlinks=true,
    urlcolor=black,
    linkcolor=black
}

%---------------------------------
% Section Formatting
%---------------------------------

\titleformat{\section}
{\Large\bfseries}
{}
{0em}
{}
[\titlerule]

\titlespacing{\section}
{0pt}
{12pt}
{6pt}

%---------------------------------
% Lists
%---------------------------------

\setlist[itemize]{
    leftmargin=1.2em,
    itemsep=2pt,
    topsep=2pt,
    parsep=0pt
}

%---------------------------------
% Commands
%---------------------------------

\newcommand{\name}[1]{
    \begin{center}
        {\Huge\bfseries #1}
    \end{center}
}

\newcommand{\contact}[1]{
    \begin{center}
        \small #1
    \end{center}
    \vspace{0.3cm}
}

\newcommand{\entry}[4]{
    \textbf{#1}
    \hfill
    #2

    \textit{#3}

    #4

    \vspace{0.3cm}
}

\newcommand{\project}[3]{
    \textbf{#1}

    #2

    #3

    \vspace{0.25cm}
}

\newcommand{\skill}[2]{
    \textbf{#1}: #2

    \vspace{0.15cm}
}

\setlength{\parindent}{0pt}
\setlength{\parskip}{4pt}

\endinput