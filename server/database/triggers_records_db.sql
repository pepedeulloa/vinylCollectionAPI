use records_db;
DROP TRIGGER IF EXISTS insert_record_trigger;

DELIMITER // 
CREATE TRIGGER insert_record_trigger AFTER INSERT ON record
FOR EACH ROW
BEGIN
  INSERT INTO tracklist (record_id) VALUES (NEW.id);
  SELECT LAST_INSERT_ID() INTO @tracklist_id;

  INSERT INTO opinion (record_id) VALUES (NEW.id);
  SELECT LAST_INSERT_ID() INTO @opinion_id;
  
  INSERT INTO cover (record_id) VALUES (NEW.id);
  SELECT LAST_INSERT_ID() INTO @covers_id;

  UPDATE record SET tracklist_id = @tracklist_id, opinion_id = @opinion_id, covers_id = @covers_id WHERE id = NEW.id;
END;

//

DELIMITER ;
