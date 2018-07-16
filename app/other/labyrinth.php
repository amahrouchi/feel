<?php
/**
 * Generates the labyrinth
 */

$line = array_fill(0,21,0);
$matrix = array_fill(0,21, $line);
$matrix[11][11] = 1;
$matrix[11][12] = 1;
$matrix[11][13] = 1;
$matrix[11][10] = 1;
$matrix[11][9] = 1;
$matrix[12][11] = 1;
$matrix[13][11] = 1;
$matrix[10][11] = 1;
$matrix[19][11] = 1;

$nodes = [
    [11,13],
    [11,9],
    [9,11],
    [13,11],
];

foreach ($nodes as $nodeKey => $node) {
    // Current coordinates
    $x = $node[0];
    $y = $node[1];

    // Coordinates for cell around the current one
    $around = [
        [$x, $y + 1], // ponderer en fonction de la direction (50% tout droit, 25% virage)
        [$x, $y - 1],
        [$x + 1, $y],
        [$x + 1, $y],
    ];

    // Iterate on cells around
    $stop = 0;
    foreach ($around as $nextCell) {
        // Celle coords
        $nextCellX = $nextCell[0];
        $nextCellY = $nextCell[1];

        // Unavailable cell
        if (
            !isset($matrix[$nextCellX][$nextCellY])
            || $matrix[$nextCellX][$nextCellY] === 1
        ) {
            $stop++;
            continue;
        }

        // Define if the path continues
        if ($matrix[$nextCellX][$nextCellY] !== 1) {
            $rng = rand(0, 99);
            if ($rng < 50) {
                $matrix[$nextCellX][$nextCellY] = 1;
                $nodes[] = [$nextCellX, $nextCellY];
            } else {
                $stop++;
            }
        }
    }

    // All cells are unavailable => remove the node
    unset($nodes[$nodeKey]);
}



