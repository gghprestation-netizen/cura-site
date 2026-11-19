import{c9 as t}from"./index-Vjim0UY2.js";const s={paid:["preparing"],pay_at_door:["preparing"],preparing:["ready"],ready:["picked_up"],picked_up:["in_round","delivered","not_delivered"],in_round:["delivered","not_delivered"],not_delivered:["in_round","delivered"]},m=["paid","pay_at_door"];function d(r){return(s[r.status]??[]).map(e=>e==="ready"&&!r.parcel_photo?{status:e,blocked:"photo du colis fermé à prendre par la pharmacie"}:e==="delivered"&&r.pay_at_door&&!r.paid_at?{status:e,blocked:"paiement à la porte non enregistré"}:{status:e})}function l(r,e){const n=[`Annuler la commande ${r.number??""} (${t(r.total)}) ?`,""];return n.push("• Les produits retournent en stock."),e&&e.method==="door_terminal"?n.push(`• Un remboursement de ${t(e.amount)} est créé : paiement au terminal, à rembourser vous-même puis à marquer « remboursé » dans la commande.`):e?n.push(`• Le paiement de ${t(e.amount)} est remboursé en totalité, automatiquement (Stripe, en quelques minutes) ; le client reçoit un avis de remboursement.`):n.push("• Aucun paiement encaissé : rien à rembourser."),n.push("• Les commissions non encore reversées sont annulées."),n.push("","Cette action est définitive."),n.join(`
`)}function p(r,e){const n=e==="door_terminal"?"Paiement au terminal : vous rembourserez le client vous-même (terminal ou virement), puis cliquerez « Marquer remboursé » dans la commande.":"Le remboursement part automatiquement vers Stripe dans les minutes qui suivent ; le client est prévenu.";return`Rembourser ${t(r)} ?

${n}
Les commissions liées sont réduites ou annulées et un avoir est émis.

Cette action est définitive.`}function c(r,e,n,i,u){const o=e==="refund_full"?`Remboursement de tout ce qui reste à rembourser sur le paiement${u!==void 0?` (payé ${t(u)})`:""}, envoyé automatiquement à Stripe (paiement au terminal : à rembourser vous-même puis à marquer « remboursé »).`:e==="refund_partial"?`Remboursement de ${t(i??0)}, envoyé automatiquement à Stripe (paiement au terminal : à rembourser vous-même puis à marquer « remboursé »).`:e==="voucher"?`Bon d'achat de ${t(i??0)} crédité au client.`:e==="replacement"?"Remplacement du produit, sans remboursement.":"Refus motivé, sans remboursement.";return`Trancher le litige ${r} : ${n} ?

• ${o}
• Le client reçoit la décision et le motif.

Cette décision est définitive.`}export{m as C,l as c,c as d,d as n,p as r};
