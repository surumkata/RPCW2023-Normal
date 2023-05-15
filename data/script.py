import json

from datetime import datetime


f = open("emprego-cientifico.json")
contratos = json.load(f)
f.close()

for index, p in enumerate(contratos):
    p['_id'] = "c" + str(index)
    dt = datetime.strptime(p["DataInicioContrato"], '%d/%m/%Y')
    p["AnoInicioContrato"] = dt.year

f = open("emprego-cientifico-tratado.json", "w")
json.dump(contratos, f, indent = 4)
f.close()

print("adicionados " + str(index+1) + " identificadores.")