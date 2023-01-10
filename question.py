import random
quest = "A man buys a cycle for Var1 and sells it at a loss of Var2%. What is the selling price of the cycle?"
no = 1
for x in range(2000):
    i = random.randint(1000,10000)
    j = random.randint(1,100)
    
    if i != j and j != i and i%10==0 and j%5==0:
        i = str(i)
        j = str(j)
        quest = quest.replace("Var1",i)
        quest = quest.replace("Var2",j)

        solution = (''' CP of cycle =Var1, loss = Var2% SP=Var1*(1-(Var2/100))  =Var1*(100-Var2)/100 =Var1*(100-Var2)/100 Rs''')
        solution = solution.replace("Var1",i)
        solution = solution.replace("Var2",j)

        i = int(i)
        j = int(j)
        result = i*(100+j)/100
        option1 = (i*(100+j)/100)+50
        option2 = (i*(100-j)/100)+30
        option3 = (i*(100-j)/100)+100
        

        print(no,quest,result,option1,option2,option3,solution,result)

        file1 = open("answers.csv", "a")
        L = str([no,quest,result,"\n"])
        file1.writelines(L)
        file1.write("\n")
        opt = str(["options are","option a",option1,"option b",option2,"option c",option3,"answer",result])
        file1.writelines(opt)
        file1.write("\n")
        soln = str(["solution is",solution,result])
        file1.writelines(soln)
        file1.write("\n\n\n")
        file1.close()

        i = str(i)
        j = str(j)

        quest = quest.replace(i,"Var1")
        quest = quest.replace(j,"Var2")

        solution = solution.replace(i,"Var1")
        solution = solution.replace(j,"Var2")

        no = no + 1

        

