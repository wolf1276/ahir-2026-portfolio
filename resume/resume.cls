% File: resume.cls
% ------------------------------------------------------------
% A minimal, ATS‑friendly, single‑column resume class.
% ------------------------------------------------------------
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{resume}[2024/08/03 v1.0 Professional Resume]

% ---- Packages ------------------------------------------------
\LoadClass[10pt,a4paper]{article}
\RequirePackage[a4paper,top=0.3in,bottom=0.3in,left=0.4in,right=0.4in]{geometry}
\RequirePackage{hyperref}
\RequirePackage{titlesec}
\RequirePackage{enumitem}
\RequirePackage{setspace}
\RequirePackage{fontspec}
\RequirePackage{xcolor}

\pagestyle{empty}
\setlength{\parskip}{0pt}
\setlength{\parsep}{0pt}

% ---- Font ----------------------------------------------------
\setmainfont{TeX Gyre Termes}

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
  {\fontsize{11pt}{13pt}\bfseries\MakeUppercase}
  {}{0pt}{}
\titlespacing*{\section}{0pt}{0.4ex}{0.1ex}
\newcommand{\sectionrule}{
  \vspace{0.1ex}\hrule\vspace{0.1ex}
}

% ---- Helper macros -------------------------------------------
\newcommand{\name}[1]{
  \begin{center}
    {\fontsize{18pt}{22pt}\selectfont #1}\\[0.1ex]
  \end{center}
}
\newcommand{\contact}[1]{
  \begin{center}
    \small #1
  \end{center}
}

\newcommand{\mysection}[1]{
  \section*{#1}
  \sectionrule
}

\newcommand{\roleentry}[3]{%
  \noindent\textbf{#1} \hfill {\small #2}\\[0.1ex]
  \begin{itemize}[leftmargin=1.2em,label=\textbullet,nosep,topsep=0pt,partopsep=0pt,parsep=0pt,itemsep=0.1pt]
    #3
  \end{itemize}
  \vspace{0.1ex}
}

\newcommand{\projectentry}[3]{%
  \noindent\textbf{#1} \hfill {\small #2}\\[0.1ex]
  \begin{itemize}[leftmargin=1.2em,label=\textbullet,nosep,topsep=0pt,partopsep=0pt,parsep=0pt,itemsep=0.1pt]
    #3
  \end{itemize}
  \vspace{0.1ex}
}

\newenvironment{myitemize}{
  \begin{itemize}[leftmargin=1.2em,label=\textbullet,nosep,topsep=0pt,partopsep=0pt,parsep=0pt,itemsep=0.1pt]
}{\end{itemize}}

% ------------------------------------------------------------
% End of class
% ------------------------------------------------------------