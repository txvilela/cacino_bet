import os

pasta = "imagens"

traducao = {
    "hearts": "copas",
    "diamonds": "ouros",
    "spades": "espadas",
    "clubs": "paus",
    "ace": "A",
    "jack": "J",
    "queen": "Q",
    "king": "K"
}

for nome_arquivo in os.listdir(pasta):
    if not nome_arquivo.endswith(".png"):
        continue

    partes = nome_arquivo.replace(".png", "").split("_")
    valor = traducao.get(partes[0], partes[0])
    naipe = traducao.get(partes[-1], partes[-1])
    novo_nome = f"{valor}_{naipe}.png"

    os.rename(os.path.join(pasta, nome_arquivo), os.path.join(pasta, novo_nome))
    print(f"{nome_arquivo} → {novo_nome}")
