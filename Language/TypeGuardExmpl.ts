/**
 * Type Guarding influences TypeScript's code flow analysis 
 * using JavaScript runtime checks.
 */

interface Order {
    address: string;
  }
  interface TelephoneOrder extends Order {
    callerNumber: string;
  }
  interface InternetOrder extends Order {
    email: string;
  }
  
  type PossibleOrders = TelephoneOrder | InternetOrder | undefined;
  
  declare function getOrder(): PossibleOrders;
  const possibleOrder = getOrder();
  
  /**
   * Use the "in" operator to check if an object has a specific key.
   */
  if ("email" in possibleOrder) {
    const mustBeInternetOrder = possibleOrder;
  }
  
  /**
   * Use "instanceof" for class-based checks.
   */
  class TelephoneOrderClass {
    address: string;
    callerNumber: string;
  }
  
  if (possibleOrder instanceof TelephoneOrderClass) {
    const mustBeTelephoneOrder = possibleOrder;
  }
  
  /**
   * Use "typeof" for primitive type checks.
   */
  if (typeof possibleOrder === "undefined") {
    const definitelyNotAnOrder = possibleOrder;
  }
  
  /**
   * Type predicate functions explicitly define type checks.
   */
  function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
    return !!order && "email" in order;
  }
  
  function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
    return !!order && "callerNumber" in order;
  }
  
  /**
   * Using type guards to refine types.
   */
  if (isAnInternetOrder(possibleOrder)) {
    console.log("Order received via email:", possibleOrder.email);
  }
  
  if (isATelephoneOrder(possibleOrder)) {
    console.log("Order received via phone:", possibleOrder.callerNumber);
  }
  