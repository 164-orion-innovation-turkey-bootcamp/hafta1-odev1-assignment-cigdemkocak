const nums = [2,7,11,3,6,15]
target = 9;

function targetIndex(nums,target){//fonksyonu tanımladık. Fonksiyon bir sayı dizisi ve br hedef değeri alıyor.

    let resultindex = []; //Sonuç değerlerini tutmak için bir dizi tanımlandı.

    for(var i= 0 ; i < nums.length ; i++){ //İç içe iki for döngüsü ile dizi içindeki değerler gezildi.

        for (var j = i+1; j < nums.length; j++){

            if(nums[i] + nums[j] == target ){ //Toplam değerin hedef değere eşit olup olmadığı şartı kontrol edildi.

               resultindex.push([i,j]); // Eşit olduğu durumlardaki index değerleri resultindex dizisine atıldı.
            }
        }
    }
    return resultindex; // Sonuç index dğerleri döndürüldü.
}

console.log(targetIndex(nums, target));