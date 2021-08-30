<?php class Tool
{
    public static function safe_input($input)
    {
        //trim — Supprime les espaces (ou d'autres caractères) en début et fin de chaîne
        $input = trim($input);
        //stripslashes — Supprime les antislashs d'une chaînes
        $input = stripslashes($input);
        //htmlspecialchars — Convertit les caractères spéciaux en entités HTML
        $input = htmlspecialchars($input);
        // strip_tags() tente de retourner la chaîne string après avoir supprimé tous les octets nuls, toutes les balises PHP et HTML du code.
        //Elle génère des alertes si les balises sont incomplètes ou erronées. Elle utilise le même moteur de recherche que fgetss().
        $input = strip_tags($input);
        return $input;
    }
}
