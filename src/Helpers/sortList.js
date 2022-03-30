function sortList(givenList, decidingFactor1, decidingFactor2) {
  givenList.sort((item1, item2) =>
    item1.orderDetails.timeStamp > item2.orderDetails.timeStamp
      ? decidingFactor1
      : item2.orderDetails.timeStamp > item1.orderDetails.timeStamp
      ? decidingFactor2
      : 0
  );
  return;
}

export default sortList;
