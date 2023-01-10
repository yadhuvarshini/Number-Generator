import json
import random
f = open('profitandloss.json')
arr = []
data = json.load(f)
print(len(data.keys()))
print(data.keys())
no = 1
for i in range(1,len(data.keys())+1):
        i = str(i)
        max_a = int(data[i]["max_a"])
        max_b = int(data[i]["max_b"])

        formula = data[i]["formula"]

        min_a = int(data[i]["min_a"])
        min_b = int(data[i]["min_b"])

        range_a = int(data[i]["range_a"])
        range_b = int(data[i]["range_b"])

        for x in range(10000):
                a = random.randint(min_a,max_a)
                b = random.randint(min_b,max_b)
                
                if(a%range_a==0 and b%range_b==0 ):
                        a = str(a)
                        b = str(b)
                        question = data[i]["question"]
                        question = question.replace("(a)",a)
                        question = question.replace("(b)",b)

                        formula = formula.replace("a",a)
                        formula = formula.replace("b",b)

                        a = int(a)
                        b = int(b)

                        result = eval(formula)
                        print(no,"type ->",i,question,result)

                        file1 = open("Profit_Loss(1).csv", "a")
                        L = str([no,"type ->","Profit and Loss",i,question,result])
                        file1.writelines(L)
                        file1.write("\n\n")
                        file1.close()

                        a = str(a)
                        b = str(b)

                        question = question.replace(a,"(a)")
                        question = question.replace(b,"(b)")

                        formula = formula.replace(a,"a")
                        formula = formula.replace(b,"b")

                        no = no+1
                        print("\n")