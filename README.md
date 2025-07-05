# Git
git é sistema de controle de versão.
Ele serve para registrar, controlar e reverter alterações feitas em arquivos de um projeto

Com Git, você pode:
- Ver o hitórico de mudanças
- Trabalhar com várias versões ao mesmo tempo
- Trabalhar em equipe sem bagunçar os arquivos

## Branch
É uma linha de desenvolvimento separada dentro do Git.

Pense assim:
- A branch main é a principal
- Você pode criar uma branch qualquer e fazer commits
- Depois pode juntar essa branch de volta na main

### Comandos
git config --global user.name "Seu_Nome"
git config --global user.email "seu@email.com"

git help -a

git init
git status
git add *
git commit -m 'mensagem do commit'

git remote add origin
git push -u origin main

git branch
git branch nome_da_branch
git branch -d nome_da_branch
git switch nome_da_branch
git checkout -b nome_da_branch

git fetch
git pull
git push