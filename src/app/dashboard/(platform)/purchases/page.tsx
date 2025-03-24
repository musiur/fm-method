import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PurchaseHistoryPage = () => {
  const OrderList = [
    {
      orderId: "ORDER-001",
      status: "Paid",
      method: "Credit Card",
      amount: "৳250.00",
    },
    {
      orderId: "ORDER-002",
      status: "Paid",
      method: "City Bank",
      amount: "৳120.00",
    },
    {
      orderId: "ORDER-003",
      status: "Paid",
      method: "Credit Card",
      amount: "৳330.00",
    },
    {
      orderId: "ORDER-004",
      status: "Paid",
      method: "Nagad",
      amount: "৳250.00",
    },
    {
      orderId: "ORDER-005",
      status: "Paid",
      method: "Credit Card",
      amount: "৳150.00",
    },
    {
      orderId: "ORDER-006",
      status: "Paid",
      method: "bKash",
      amount: "৳258.00",
    },
  ];
  return (
    <Table>
      <TableCaption>A list of your recent purchases.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {OrderList.map((order) => (
          <TableRow key={order.orderId}>
            <TableCell className="font-medium">{order.orderId}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>{order.method}</TableCell>
            <TableCell className="text-right">{order.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PurchaseHistoryPage;
