// // // var a = []
// // var d = [1,2,3]
// // var b = [4,5,6]
// var d = [[1,2,3],[4,5,6]]
// // console.log(d[0][0],d[1][0],d[2][0])
// // console.log(d[0][0],d[1][0],d[2][1])
// // console.log(d[0][0],d[1][0],d[2][2])
 
// console.log(d[0].length)

//     for(var i = 0; i < d.length; i++) {
//         for(var j = 0; j < d[i].length; j++) {
//            console.log(i,j)
//         }
//     }

// // var third = [];

// // for (var c=0;c<5;c++)
// // {
// //     var a = []
// //     for (var i = 0; i < 5; i++)
// //     {
// //        a.push(i)
// //     }
// //     third.push(a)
// // }
// // console.log(third)

// // var arr4=[]
// // var arr5 =[]
// // var arr6 =[]
// // var arr7=[]

// // for(var i = 0; i < third.length; i++)
// // {
// //     arr4 = third[i]
// //     console.log("1",arr4)
// //     i = i + 1
// //     for(var j = i; j < third.length; j++)
// //     {
// //         arr5 = third[j]
// //         j = j + 1

// //         for(var k = j; k < third.length; k++){
// //             arr6= third[k]
// //             k = k + 1
// //             for(var l = k; l < third.length; l++){
// //                 arr7 = third[l]
// //                 l = l + 1
// //             }
// //         }
// //     }

// // }
// // console.log("h1",arr4)
// // console.log("h2",arr5)
// // console.log("h2",arr6)
// // console.log("h2",arr7)



// // for(var i = 0; i < arr4.length; i++)
// // {
// //     for(var j = 0; j < arr5.length; j++)
// //     {
// //         for(var k = 0; k < arr6.length; k++)
// //         {
// //             for(var l = 0; l < arr7.length; l++)
// //             {
// //                 console.log(arr4[i],arr5[j],arr6[k],arr7[l])
// //             }
// //         }
// //     }
// // }
// //           0 1 2
// var sass = [[2,3,4],    //0
//             [6,7,8],    //1
//             [7,8,9],    //2
//             [8,9,1]]    //3
// var a=[]
// var no = 4
// var min = 1
// var max =5

// function alpha(no,min,max){
//     var no = no
//     var min = min
//     var max = max
//    for(var i = 0; i < no; i++)
//     {
//         var a=[]
//         for(var j = min; j < max;j++)
//         {
//             a.push(j)
//         }
//         sass.push(a)
//     }
// }

// // alpha(no,min,max)

// var n = 3
// var size = [[2],[4],[2]];
// var res = [];
// beta(0,n,size,res);

// function beta(d,n,size,res){
//     if (d>=n)
//     {
//         for(var i=0;i<n;i++)
//         {
//             var w = [];
//             w = res[i]
//             console.log(w);
//         }
//     }
//     for(var i = 0;i<size[d];i++)
//     {
//         res[d] = i
//         beta(d+1,n,size,res)
//     }
// }

// var combi_array = [[1,2,3],[4,5,6],[7,8,9]]


// for(var i=0;i<combi_array[0].len;i++)
// {
//    var first_elem = combi_array[0][i];  //  [0,0]

//       for(var j=0;j<combi_array[1].len;j++)
//         {
//            var secon_ele = combi_array[1][j]; // [1,0] 

//            for(var k=0;k<combi_array[2].len;k++) // 4 
//             {
//                 var third_elem = combi_array[2][k]; // [2,0] [2,1] [2,2] [2,3]
//                 var temp = []
//                 temp.push(first_elem);
//                 temp.push(secon_ele);
//                 temp.push(third_elem);
//                 console.log(temp);                        //1 , 11 , 21 // 1,11,22 // 1, 11, 23 // 1,11,24

//             } 
//         }  
// }


// for(var a=0;a<ias.length;a++){
//                                                                 //0
//         for(var i=0;i<combi_array[a].len;i++)
//         {                     
//         var first_elem = combi_array[a][i];                             //  [0,0]
//             a = a + 1                                           //1
//             for(var j=0;j<combi_array[a].len;j++)
//                 {
//                     var secon_ele = combi_array[a][j]; // [1,0] 
//                     a = a+1                                     //2       
//                     for(var k=0;k<combi_array[a].len;k++) // 4 
//                     {
//                         var third_elem = combi_array[a][k]; // [2,0] [2,1] [2,2] [2,3]
//                         var temp = []
//                         temp.push(first_elem);
//                         temp.push(secon_ele);
//                         temp.push(third_elem);
//                         console.log(temp);                        //1 , 11 , 21 // 1,11,22 // 1, 11, 23 // 1,11,24
        
//                     } 
//                 }  
//         }
//     } 
// }

          
//             //      i  i       j  i       k  i       l  tat    = 0  
// console.log(sass[0][0],sass[1][0],sass[2][0],sass[3][0])
//             //   i  i       j  i       k  i       l  tat    =1 
// console.log(sass[0][0],sass[1][0],sass[2][0],sass[3][1])
//             //   i  i       j  i       k  i       l  tat    =2  
// console.log(sass[0][0],sass[1][0],sass[2][0],sass[3][2])


// //          //   i  i       j  i       k tat      l  tat     
// console.log(sass[0][0],sass[1][0],sass[2][1],sass[3][0])            //tat = 1 
// //          //   i  i       j  i       k tat      l  tat     
// console.log(sass[0][0],sass[1][0],sass[2][1],sass[3][1])
// //          //   i  i       j  i       k tat      l  tat  
// console.log(sass[0][0],sass[1][0],sass[2][1],sass[3][2])



// //          //   i  i       j  i       k tat      l  tat  = 0    
// console.log(sass[0][0],sass[1][0],sass[2][2],sass[3][0])
// //          //   i  i       j  i       k tat      l  tat  = 0    
// console.log(sass[0][0],sass[1][0],sass[2][2],sass[3][1])
// //          //   i  i       j  i       k tat      l  tat  = 0    
// console.log(sass[0][0],sass[1][0],sass[2][2],sass[3][2])




// console.log(sass[0][0],sass[1][1],sass[2][0],sass[3][0])
// console.log(sass[0][0],sass[1][1],sass[2][0],sass[3][1])
// console.log(sass[0][0],sass[1][1],sass[2][0],sass[3][2])

// console.log(sass[0][0],sass[1][1],sass[2][1],sass[3][0])
// console.log(sass[0][0],sass[1][1],sass[2][1],sass[3][1])
// console.log(sass[0][0],sass[1][1],sass[2][1],sass[3][2])

// console.log(sass[0][0],sass[1][1],sass[2][2],sass[3][0])
// console.log(sass[0][0],sass[1][1],sass[2][2],sass[3][1])
// console.log(sass[0][0],sass[1][1],sass[2][2],sass[3][2])

// console.log(sass[0][0],sass[1][2],sass[2][0],sass[3][0])
// console.log(sass[0][0],sass[1][2],sass[2][0],sass[3][1])
// console.log(sass[0][0],sass[1][2],sass[2][0],sass[3][2])


// console.log(sass[0][0],sass[1][2],sass[2][1],sass[3][0])
// console.log(sass[0][0],sass[1][2],sass[2][1],sass[3][1])
// console.log(sass[0][0],sass[1][2],sass[2][1],sass[3][2])

// console.log(sass[0][0],sass[1][2],sass[2][2],sass[3][0])
// console.log(sass[0][0],sass[1][2],sass[2][2],sass[3][1])
// console.log(sass[0][0],sass[1][2],sass[2][2],sass[3][2])

// //2nd
// console.log(sass[0][1],sass[1][0],sass[2][0],sass[3][0])
// console.log(sass[0][1],sass[1][0],sass[2][0],sass[3][1])
// console.log(sass[0][1],sass[1][0],sass[2][0],sass[3][2])

// console.log(sass[0][1],sass[1][0],sass[2][1],sass[3][0])
// console.log(sass[0][1],sass[1][0],sass[2][1],sass[3][1])
// console.log(sass[0][1],sass[1][0],sass[2][1],sass[3][2])

// console.log(sass[0][1],sass[1][0],sass[2][2],sass[3][0])
// console.log(sass[0][1],sass[1][0],sass[2][2],sass[3][1])
// console.log(sass[0][1],sass[1][0],sass[2][2],sass[3][2])

// console.log(sass[0][1],sass[1][1],sass[2][0],sass[3][0])
// console.log(sass[0][1],sass[1][1],sass[2][0],sass[3][1])
// console.log(sass[0][1],sass[1][1],sass[2][0],sass[3][2])

// console.log(sass[0][1],sass[1][1],sass[2][1],sass[3][0])
// console.log(sass[0][1],sass[1][1],sass[2][1],sass[3][1])
// console.log(sass[0][1],sass[1][1],sass[2][1],sass[3][2])

// console.log(sass[0][1],sass[1][1],sass[2][2],sass[3][0])
// console.log(sass[0][1],sass[1][1],sass[2][2],sass[3][1])
// console.log(sass[0][1],sass[1][1],sass[2][2],sass[3][2])

// console.log(sass[0][1],sass[1][2],sass[2][0],sass[3][0])
// console.log(sass[0][1],sass[1][2],sass[2][0],sass[3][1])
// console.log(sass[0][1],sass[1][2],sass[2][0],sass[3][2])

// console.log(sass[0][1],sass[1][2],sass[2][1],sass[3][0])
// console.log(sass[0][1],sass[1][2],sass[2][1],sass[3][1])
// console.log(sass[0][1],sass[1][2],sass[2][1],sass[3][2])

// console.log(sass[0][1],sass[1][2],sass[2][2],sass[3][0])
// console.log(sass[0][1],sass[1][2],sass[2][2],sass[3][1])
// console.log(sass[0][1],sass[1][2],sass[2][2],sass[3][2])

// //3rd

// console.log(sass[0][2],sass[1][0],sass[2][0],sass[3][0])
// console.log(sass[0][2],sass[1][0],sass[2][0],sass[3][1])
// console.log(sass[0][2],sass[1][0],sass[2][0],sass[3][2])

// console.log(sass[0][2],sass[1][0],sass[2][1],sass[3][0])
// console.log(sass[0][2],sass[1][0],sass[2][1],sass[3][1])
// console.log(sass[0][2],sass[1][0],sass[2][1],sass[3][2])

// console.log(sass[0][2],sass[1][0],sass[2][2],sass[3][0])
// console.log(sass[0][2],sass[1][0],sass[2][2],sass[3][1])
// console.log(sass[0][2],sass[1][0],sass[2][2],sass[3][2])

// console.log(sass[0][2],sass[1][1],sass[2][0],sass[3][0])
// console.log(sass[0][2],sass[1][1],sass[2][0],sass[3][1])
// console.log(sass[0][2],sass[1][1],sass[2][0],sass[3][2])

// console.log(sass[0][2],sass[1][1],sass[2][1],sass[3][0])
// console.log(sass[0][2],sass[1][1],sass[2][1],sass[3][1])
// console.log(sass[0][2],sass[1][1],sass[2][1],sass[3][2])

// console.log(sass[0][2],sass[1][1],sass[2][2],sass[3][0])
// console.log(sass[0][2],sass[1][1],sass[2][2],sass[3][1])
// console.log(sass[0][2],sass[1][1],sass[2][2],sass[3][2])

// console.log(sass[0][2],sass[1][2],sass[2][0],sass[3][0])
// console.log(sass[0][2],sass[1][2],sass[2][0],sass[3][1])
// console.log(sass[0][2],sass[1][2],sass[2][0],sass[3][2])

// console.log(sass[0][2],sass[1][2],sass[2][1],sass[3][0])
// console.log(sass[0][2],sass[1][2],sass[2][1],sass[3][1])
// console.log(sass[0][2],sass[1][2],sass[2][1],sass[3][2])

// console.log(sass[0][2],sass[1][2],sass[2][2],sass[3][0])
// console.log(sass[0][2],sass[1][2],sass[2][2],sass[3][1])
// console.log(sass[0][2],sass[1][2],sass[2][2],sass[3][2])





//   0 1 2
// 0[2,3,4],    
// 1[6,7,8],    
// 2[7,8,9],    
// 3[8,9,1]    



//     0 1 2  
//0  //2 3 4   
//1  //6 7 8
//2  //7 8 9                                                                
//3  //8 9 10
//4  //9 1 2

//2 6 7         ias[0][0],  ias[1][0], ias[2][0],
//2 6 8         ias[0][0],  ias[1][0], ias[2][1], 
//2 6 9         ias[0][0],  ias[1][0], ias[2][2],

//2 6 7 8       ias[0][0],  ias[1][0], ias[2][0], ias[3][0], 
//2 6 7 9       ias[0][0],  ias[1][0], ias[2][0], ias[3][1],
//2 6 7 10      ias[0][0],  ias[1][0], ias[2][0], ias[3][2],

//2 6 7 8 9     ias[0][0],  ias[1][0], ias[2][0], ias[3][0], ias[4][0],
//2 6 7 8 1     ias[0][0],  ias[1][0], ias[2][0], ias[3][0], ias[4][1], 
//2 6 7 8 2     ias[0][0],  ias[1][0], ias[2][0], ias[3][0], ias[4][2],  

//2 7        

//2 8

var a = []
submit()

function submit()
{
    var len = []
    for(var i = 1; i <= 10;i++)
    {
        console.log(len.push(i))
    }
    a.push(len)
}

console.log("7",a[0])



