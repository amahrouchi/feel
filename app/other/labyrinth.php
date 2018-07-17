<?php
$width = 41;
$center = 21;
$line = array_fill(0,$width,0);
$matrix = array_fill(0,$width, $line);
$matrix[$center][$center] = 1;
$matrix[$center][$center + 1] = 1;
$matrix[$center][$center + 2] = 1;
$matrix[$center][$center - 1] = 1;
$matrix[$center][$center - 2] = 1;
$matrix[$center + 1][$center] = 1;
$matrix[$center + 2][$center] = 1;
$matrix[$center - 1][$center] = 1;
$matrix[$center - 2][$center] = 1;

$nodes = [
    [$center, $center + 2],
    [$center, $center - 2],
    [$center + 2, $center],
    [$center - 2, $center],
];

$nodeKey = 0;
$count = 0;
while (isset($nodes[$nodeKey])) {
    // foreach ($nodes as $nodeKey => $node) {
    $node = $nodes[$nodeKey];

    // Current coordinates
    $x = $node[0];
    $y = $node[1];

    // Coordinates for cell around the current one
    $around = [
        [$x, $y + 2], // ponderer en fonction de la direction (50% tout droit, 25% virage)
        [$x, $y - 2],
        [$x + 2, $y],
        [$x - 2, $y],
    ];

    // Iterate on cells around
    foreach ($around as $nextCell) {
        // Cell coords
        $nextCellX = $nextCell[0];
        $nextCellY = $nextCell[1];

        // Unavailable cell
        if (
            !isset($matrix[$nextCellX][$nextCellY])
            || $matrix[$nextCellX][$nextCellY] === 1
        ) {
            continue;
        }

        // Define if the path continues
        if ($matrix[$nextCellX][$nextCellY] !== 1) {
            $rng = rand(0, 99);
            if ($rng < 50) {
                $matrix[$nextCellX][$nextCellY] = 1;

                if ($nextCellX !== $x) {
                    $a = ($nextCellX + $x) / 2;
                    $matrix[$a][$nextCellY] = 1;
                }

                if ($nextCellY !== $y) {
                    $a = ($nextCellY + $y) / 2;
                    $matrix[$nextCellX][$a] = 1;
                }

                $nodes[] = [$nextCellX, $nextCellY];

                $count++;
            }
        }
    }

    // $stop var is useless ATM

    // All cells are unavailable => remove the node
    unset($nodes[$nodeKey]);
    $nodeKey++;
}

foreach($matrix as $line) {
    foreach($line as $cell) {
        echo $cell === 1 ? "\e[47m \e[49m" : "\e[44m \e[49m";
    }
    echo PHP_EOL;
}

echo $count . PHP_EOL;