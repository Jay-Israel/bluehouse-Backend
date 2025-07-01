def pascal_triangle(n):
    """
    Returns a list of lists of integers representing the Pascal's triangle of n.
    Returns an empty list if n <= 0.
    """
    if n <= 0:
        return []
    triangle = []
    for row_num in range(n):
        row = [1] * (row_num + 1)
        for j in range(1, row_num):
            row[j] = triangle[row_num - 1][j - 1] + triangle[row_num - 1][j]
        triangle.append(row)
    return triangle

if __name__ == "__main__":
    n = 5
    result = pascal_triangle(n)
    for row in result:
        print(row) 