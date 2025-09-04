uses javax.swing.*
uses java.awt.*
uses java.awt.event.*

var frame = new JFrame("Add Two Numbers")
var num1Field = new JTextField(10)
var num2Field = new JTextField(10)
var resultLabel = new JLabel("Result: ")
var addButton = new JButton("Add")

addButton.addActionListener(\ e -> {
  var a = Integer.parseInt(num1Field.Text)
  var b = Integer.parseInt(num2Field.Text)
  var sum = a + b
  resultLabel.Text = "Result: ${sum}"
})

var panel = new JPanel()
panel.add(new JLabel("Number 1:"))
panel.add(num1Field)
panel.add(new JLabel("Number 2:"))
panel.add(num2Field)
panel.add(addButton)
panel.add(resultLabel)

frame.add(panel)
frame.setSize(300, 150)
frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)
frame.setLocationRelativeTo(null)
frame.setVisible(true)