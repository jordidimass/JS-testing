function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const coupons = [
    {
        name: "Diez",
        discount: 10,
    },
    {
        name: "Veinte",
        discount: 20,
    },
    {
        name: "Cuarenta",
        discount: 40,
    },
];

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    // const InputDiscount = document.getElementById("InputDiscount");
    // const discountValue = InputDiscount.value;

    // const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    // const Preciofinal = document.getElementById("Preciofinal")
    // Preciofinal.innerText = "El precio con descuento son: $" + precioConDescuento;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case "Diez":
            descuento = 15;
        break;
        case "Veinte":
            descuento = 20;
        break;
        case "Cuarenta":
            descuento = 40;
        break;
    }

    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const Preciofinal = document.getElementById("Preciofinal")
    Preciofinal.innerText = "El precio con descuento es: $" + precioConDescuento
};

if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + "no es válido");
 } else if (couponValue === "JuanDC_es_Batman") {
    descuento = 15;
 } else if (couponValue === "pero_no_le_digas_a_nadie") {
    descuento = 30;
 } else if (couponValue === "es_un_secreto") {
    descuento = 25;
 }

//  ☜(ﾟヮﾟ☜)





    //     name: "Quince por ciento",
    //     discount: 15, 
    // },
    // {
    //     name: "Treinta por ciento",
    //     discount: 30,
    // }
    // {
    //     name: "Cincuenta por ciento",
    //     discount: 50,
    // }




// ┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌╔╗┌┌╔╗┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
// ┌┌┌┌┌┌┌┌╔╗┌┌┌┌┌┌║║┌┌║║┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌    
// ┌┌┌┌┌┌┌┌╚╬══╦═╦═╝╠╦═╝╠╦╗╔╦══╦══╦══╗┌┌┌┌┌
// ┌┌┌┌┌┌┌┌╔╣╔╗║╔╣╔╗╠╣╔╗╠╣╚╝║╔╗║══╣══╣┌┌┌┌┌
// ┌┌┌┌┌┌┌┌║║╚╝║║║╚╝║║╚╝║║║║║╔╗╠══╠══║┌┌┌┌┌
// ┌┌┌┌┌┌┌┌║╠══╩╝╚══╩╩══╩╩╩╩╩╝╚╩══╩══╝┌┌┌┌┌
// ┌┌┌┌┌┌┌╔╝║┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
// ┌┌┌┌┌┌┌╚═╝┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
// ▒▒▄▀▀▀▀▀▄▒▒▒▒▒▄▄▄▄▄▒▒▒
// ▒▐░▄░░░▄░▌▒▒▄█▄█▄█▄█▄▒
// ▒▐░▀▀░▀▀░▌▒▒▒▒▒░░░▒▒▒▒
// ▒▒▀▄░═░▄▀▒▒▒▒▒▒░░░▒▒▒▒
// ▒▒▐░▀▄▀░▌▒▒▒▒▒▒░░░▒▒▒▒
